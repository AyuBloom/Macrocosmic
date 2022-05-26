const { WebSocketServer } = require('ws');
const ByteBuffer = require('bytebuffer');
let server = new WebSocketServer({ port: 8008 });

// const express = require('express');
// let app = express();

const sessionUtils = {
    getState() {
        const state = {};
        for (let i in sessions) {
            state[i] = {available: !sessions[i].recording};
        }
        return state;
    },
    resetState(ses) {
        sessions[ses] = {
            recording: false,
            player: {},
            followers: [],
        }
    }
}

const sessions = {
    ses1: {
        recording: false,
        player: {},
        followers: [],
    },
    ses2: {
        recording: false,
        player: {},
        followers: [],
    },
    ses3: {
        recording: false,
        player: {},
        followers: [],
    },
    ses4: {
        recording: false,
        player: {},
        followers: [],
    },
}

/*
app.use(express.json());

app.get('/data', (req, res) => {
    const response = sessions.getState();

    res.send(response);
})

app.listen(727, () => console.log(`Ping server set up at port 727`));
*/

function simpleStringEncode(str) {
    const buffer = new ByteBuffer().writeString(str).flip();
    return buffer.toArrayBuffer();
}
function simplePacketEncode(packet, followerIndex) {
    const buffer = new ByteBuffer().writeUint8(packet).writeUint8(followerIndex).flip();
    return buffer.toArrayBuffer();
}

server.on('connection', function(ws) {
    let initMessage = true;
    ws.on('message', msg => {
        if (initMessage) {
            initMessage = false;
//            try {
                const buffer = ByteBuffer.wrap(msg, 'utf8', !0),
                    message = buffer.toString('utf8'),
                    dataArray = message.split('/');
                ws.socketType = dataArray[0];
                if (ws.socketType == "p") {
                    ws.send(simpleStringEncode(JSON.stringify(sessionUtils.getState())));
                    ws.close(1000);
                    return;
                }
                ws.sesId = dataArray[1];
                ws.key = dataArray[2];

                ws.isRecorder = false;
                ws.isFollower = false;

                ws.allowed = true;

                if (ws.socketType == "r") {
                    if (sessions[ws.sesId].recording) return ws.close(1000, "Session is already occupied.");
                    sessions[ws.sesId].player.master = ws;

                    sessions[ws.sesId].maxFollower = dataArray[2] || 5;
                    sessions[ws.sesId].recording = true;
                    ws.isRecorder = true;
                }
                if (ws.socketType == "g") {
                    if (!sessions[ws.sesId].recording)
                        return ws.close(1000, "Session is not occupied.");
                    if (sessions[ws.sesId].followers.length > sessions[ws.sesId].maxFollower)
                        return ws.close(1000, "Session reached max amount of followers.");
                    ws.isFollower = true;
                    ws.index = sessions[ws.sesId].followers.length;
                    sessions[ws.sesId].followers.push(ws);
                    for (let i = 2; i <= 8; i*=2)
                        sessions[ws.sesId].player.master.send(simplePacketEncode(i, ws.index)); 
                }
//            } catch {
//                ws.close(1000);
//                console.log('some nerd tried to do a funny kek');
//            }
            return;
        }
        ws.data = msg;
        if (ws.isRecorder) {
            const buffer = ByteBuffer.wrap(ws.data, 'utf8', true);
            const opcode = buffer.readUint8();
            if (opcode == 2 || opcode == 7) {
                const followerIndex = buffer.readUint8();
                sessions[ws.sesId].followers[followerIndex].send(ws.data);
            } else {
                for (let follower in sessions[ws.sesId].followers)
                    sessions[ws.sesId].followers[follower].send(ws.data);
            }
        }
        if (ws.isFollower) {
            const buffer = ByteBuffer.wrap(ws.data, 'utf8', true);
            const opcode = buffer.readUint8();
            if (opcode == 7) {
                const followerIndex = buffer.readUint8();
                const pingBuffer = new ByteBuffer()
                    .writeUint8(7)
                    .writeUint8(followerIndex)
                    .flip();
                sessions[ws.sesId].player.master.send(pingBuffer.toArrayBuffer());
            } else {
                Object.keys(sessions[ws.sesId].player).length > 0 && sessions[ws.sesId].player.master.send(ws.data);
            }
        }
    });
    ws.on('close', () => {
        if (ws.allowed) {
            if (ws.isRecorder === true) {
                for (let follower in sessions[ws.sesId].followers)
                    sessions[ws.sesId].followers[follower].close(1000, "The session host has closed the connection.");
                sessionUtils.resetState(ws.sesId);
            }
            if (ws.isFollower === true) {
                delete sessions[ws.sesId].followers[ws.index];
            }
        }
    })
})