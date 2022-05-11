// ==UserScript==
// @name         Shared Websocket
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  standalone client for Shared Websocket communication
// @author       Randominist, inspired by Benjii's session saver
// @match        http://zombs.io/
// @icon         none
// @grant        none
// @require      https://raw.githubusercontent.com/dcodeIO/ByteBuffer.js/master/dist/bytebuffer.min.js
// @noframes
// ==/UserScript==

document.querySelector("#hud-intro > div.hud-intro-wrapper > div.hud-intro-main > div.hud-intro-form").insertAdjacentHTML("beforeend", `
    <label>
        <input type="checkbox" id="recordSes" value="false">
        <span>Record Session</span>
    </label>
    <select id="recSesOptions" class="btn" style="margin-top: 10px;width: 100%;">
        <option value="ses1" selected>Session 1</option>
        <option value="ses2">Session 2</option>
        <option value="ses3">Session 3</option>
        <option value="ses4">Session 4</option>
    </select>
`);

function genUUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const attribute_enums = {
    1: 'attributeMaps',
    2: 'entityTypeNames',
    3: 'rpcMaps',
    4: 'rpcMapsByName',
    5: 'sortedUidsByType',
}

const uint16_enums = {
    256: 'attributeMaps',
    512: 'entityTypeNames',
    768: 'rpcMaps',
    1024: 'rpcMapsByName',
    1280: 'sortedUidsByType',
}

const packet_enum = {
    0: 'PACKET_ENTITY_UPDATE',
    1: 'PACKET_RPC2',
    2: 'PACKET_ENTITY_UPDATE2',
    3: 'PACKET_INPUT',
    4: 'PACKET_ENTER_WORLD',
    5: 'PACKET_PRE_ENTER_WORLD',
    6: 'PACKET_ENTER_WORLD2',
    7: 'PACKET_PING',
    8: 'PACKET_ATTRIBUTE',
    9: 'PACKET_RPC'
}

let sessionElem = document.createElement('optgroup');
sessionElem.innerHTML = `
<option value="ses1">Session 1</option>
<option value="ses2">Session 2</option>
<option value="ses3">Session 3</option>
<option value="ses4">Session 4</option>`;
sessionElem.label = "Sessions";
game.ui.components.Intro.serverElem.appendChild(sessionElem);

var isUsingSession = false,
    sessionId = null;
let sessionUrl = "OutgoingGraciousGames.ayu-bloom.repl.co";

document.querySelector("#recordSes").addEventListener('change', (e) => {
    if (e.target.checked) {
        sessionId = document.querySelector("#recSesOptions").value;
        isUsingSession = true;
    } else isUsingSession = false;
});

document.querySelector("#recSesOptions").addEventListener('change', (e) => {
    sessionId = e.target.value;
})

game.network.connect2 = game.network.connect;
game.network.connect = options => {
    for (let i of sessionElem.children) {
        if (i.selected) { isUsingSession = true; sessionId = i.value; };
    }
    if (isUsingSession) {
        const simpleStringEncode = (str) => {
            const buffer = new dcodeIO.ByteBuffer().writeString(str).flip();
            return buffer.toArrayBuffer();
        }
        const sesWs = new WebSocket(`wss://${sessionUrl}`);
        sesWs.binaryType = "arraybuffer";
        if (document.querySelector("#recordSes").checked) {
            sesWs.onopen = () => {
                sesWs.send(simpleStringEncode(`r/${sessionId}/${genUUID()}`));

                game.network.codec.enterRpcBuffer = {};

                game.network.codec.sendAttribute = function() {
                    for (let attribute in attribute_enums) {
                        const attributeMaps = new dcodeIO.ByteBuffer()
                            .writeUint8(8)
                            .writeUint16(parseInt(attribute))
                            .writeString(JSON.stringify(this[attribute_enums[attribute]]))
                            .flip();
                        sesWs.send(attributeMaps.toArrayBuffer());
                    }
                }

                game.network.codec.sendEnterWorldResponse = function() {
                    const enterWorld = this.enterWorldBuffer;
                    enterWorld.offset = 9;
                    enterWorld.writeUint32(game.world.replicator.currentTick.tick);
                    enterWorld.offset = 0;
                    sesWs.send(enterWorld.buffer);
                }

                game.network.codec.decode = function(arrayBuffer) {
                    const t = dcodeIO.ByteBuffer.wrap(arrayBuffer, 'utf8', !0),
                          r = t.readUint8();
                    let a, rpc, isSetItem = false;
                    switch(r) {
                        case 5:
                            a = this.decodePreEnterWorldResponse(t);
                            break;
                        case 4:
                            this.enterWorldBuffer = t;
                            sesWs.send(arrayBuffer);
                            a = this.decodeEnterWorldResponse(t);
                            break;
                        case 0:
                            sesWs.send(arrayBuffer);
                            a = this.decodeEntityUpdate(t);
                            break;
                        case 7:
                            a = this.decodePing();
                            sesWs.send(arrayBuffer);
                            break;
                        case 9:
                            rpc = t.readUint32();
                            if (rpc == 17 || rpc == 29 || rpc == 28 || rpc == 7 || rpc == 9 || rpc == 10 || rpc == 41 || rpc == 42) {
                                if (rpc == 17) isSetItem = true;
                                t.offset = 0;
                                this.enterRpcBuffer[this.rpcMaps[rpc].name] = t;
                            };
                            t.offset = 1;
                            a = this.decodeRpc(t);
                            if (isSetItem) {
                                if (a.response.itemName == "Pickaxe") {
                                    t.offset = 0;
                                    t.limit = t.buffer.byteLength;
                                    this.enterRpcBuffer["SetItem2"] = t;
                                }
                            }
                            sesWs.send(arrayBuffer);
                            break;
                    }
                    a.opcode = r;
                    return a;
                }

                game.network.connect2(options);
            }
            sesWs.onmessage = (msg) => {
                const buffer = new dcodeIO.ByteBuffer.wrap(msg.data, 'utf8', !0);
                const packet = buffer.readUint8();
                if (packet == 1) {
                    for (let rpc in game.network.codec.enterRpcBuffer) {
                        game.network.codec.enterRpcBuffer[rpc].offset = 0;
                        sesWs.send(game.network.codec.enterRpcBuffer[rpc].toArrayBuffer());
                    }
                    return;
                }
                if (packet == 2) {
                    const newEntities = {};
                    for (let i in game.world.entities) {
                        newEntities[i] = {};
                        for (let entry of Object.entries(game.world.entities[i].targetTick)) newEntities[i][entry[0]] = entry[1];
                    };
                    const entityBuffer = new dcodeIO.ByteBuffer()
                        .writeUint8(2)
                        .writeString(JSON.stringify(newEntities))
                        .flip();
                    sesWs.send(entityBuffer.toArrayBuffer());
                    return;
                }
                if (packet == 3) {
                    buffer.offset = 2;
                    const input = JSON.parse(buffer.readString(buffer.remaining()));
                    if (input.worldX) {
                        const reversedAim = game.inputPacketCreator.screenToYaw((input.worldX - game.ui.playerTick.position.x) * 100, (input.worldY - game.ui.playerTick.position.y) * 100);
                        game.inputPacketCreator.lastAnyYaw = reversedAim;
                    }
                }
                if (packet == 4) {
                    game.network.codec.sendEnterWorldResponse();
                    const optionsBuffer = new dcodeIO.ByteBuffer()
                        .writeUint8(1)
                        .writeString(JSON.stringify(game.network.connectionOptions))
                        .flip();
                    sesWs.send(optionsBuffer.toArrayBuffer());
                    return;
                }
                if (packet == 7) {
                    const _buffer = new dcodeIO.ByteBuffer().writeUint8(7).flip();
                    sesWs.send(_buffer.toArrayBuffer());
                    return;
                }
                if (packet == 8) {
                    game.network.codec.sendAttribute();
                    return;
                }
                game.network.socket.send(msg.data);
            }
            sesWs.onclose = e => {
                console.log(e.reason);
                console.log("ws closed");
            };
            return;
        }
        game.network.connected = false;
        game.network.connecting = true;
        game.network.socket = sesWs;
        game.network.bindEventListeners();

        game.network.sendPacket = function(opcode, data) {
            if (opcode === 7 || opcode === 4 || opcode === 6) return;
            this.connected && this.socket.send(this.codec.encode(opcode, data));
        }

        game.network.codec.decode = function(arrayBuffer) {
            const t = dcodeIO.ByteBuffer.wrap(arrayBuffer, 'utf8', !0), r = t.readUint8();
            let a = {};
            let attribute_type;
            let newEntities;
            switch(r) {
                case 5:
                    a = this.decodePreEnterWorldResponse(t);
                    break;
                case 4:
                    a = this.decodeEnterWorldResponse(t);
                    break;
                case 0:
                    a = this.decodeEntityUpdate(t);
                    break;
                case 7:
                    a = this.decodePing();
                    break;
                case 8:
                    attribute_type = t.readUint16();
                    this[uint16_enums[attribute_type]] = JSON.parse(t.readString(t.remaining()));
                    break;
                case 2:
                    newEntities = JSON.parse(t.readString(t.remaining()));
                    for (let uid in newEntities) game.world.createEntity(newEntities[uid]);
                    break;
                case 1:
                    game.network.connectionOptions = JSON.parse(t.readString(t.remaining()));
                    break;
                case 9:
                    a = this.decodeRpc(t);
                    break;
            }
            a.opcode = r;
            return a;
        }
        game.network.onMessage = (msg => {
            // game.network.sendPingIfNecessary();
            const decoded = game.network.codec.decode(msg.data);
            if (decoded.opcode === 5 || decoded.opcode === 7) return;

            game.network.emitter.emit(packet_enum[decoded.opcode], decoded);
        });

        game.network.addEnterWorldHandler(() => {
            game.network.sendRpc({name: "BuyItem", itemName: "HatHorns", tier: 1});
            game.network.sendRpc({name: "BuyItem", itemName: "PetCARL", tier: 1});
            game.network.sendRpc({name: "BuyItem", itemName: "PetMiner", tier: 1});

            const getRpc = new dcodeIO.ByteBuffer().writeUint8(1).flip();
            game.network.socket.send(getRpc.toArrayBuffer());
        })

        sesWs.onopen = () => sesWs.send(simpleStringEncode(`g/${sessionId}`));
        return;
    };
    game.network.connect2(options);
};