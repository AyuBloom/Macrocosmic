const _server = require('ws');
const ByteBuffer = require('bytebuffer');
let server = new _server.Server({ port: 8008 });

let sessions = {
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
  }
}

server.on('connection', function(ws) {
    let initMessage = true;
    let enterWorldMessage = false;
    ws.on('message', msg => {
        if (initMessage) {
            initMessage = false;
            const buffer = ByteBuffer.wrap(msg, 'utf8', !0),
                message = buffer.toString('utf8');
            const dataArray = message.split('/');
            ws.socketType = dataArray[0];
            ws.sesId = dataArray[1];
            ws.isRecorder = false;
            ws.isFollower = false;

            ws.allowed = true;
            ws.open = true;

            if (ws.socketType == "r") {
                const key = dataArray[2];
                sessions[ws.sesId].player.key = dataArray[2];
                sessions[ws.sesId].player.master = ws;
                sessions[ws.sesId].recording = true;
                ws.isRecorder = true;
                enterWorldMessage = true;
            }
            if (ws.socketType == "g") {
                ws.isFollower = true;
                sessions[ws.sesId].followers.push(ws);
                ws.send(sessions[ws.sesId].player.enterWorld);
            }
            return;
        }
        if (enterWorldMessage) {
            enterWorldMessage = false;
            sessions[ws.sesId].player.enterWorld = msg;
            return;
        }
        ws.data = msg;
        if (ws.isRecorder) {
            for (let follower of sessions[ws.sesId].followers) {
                if (!follower.open) { continue; }
                follower.send(ws.data);
            }
        }
        if (ws.isFollower) {
            sessions[ws.sesId].player.master.send(ws.data);
        }
    });
    ws.on('close', () => {
        ws.open = false;
        if (ws.allowed && ws.type == "record") {
            for (let follower of sessions[ws.sesId].followers) {
                if (!follower.open) { continue; } 
                follower.close(1000, "The session host has closed the connection.");
            }
            sessions[ws.sesId] = {};
        }
    })
})