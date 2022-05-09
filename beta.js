// ==UserScript==
// @name         Macrocosmic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  ayu best waifu no doubt
// @author       the one and only joe random
// @match        http://zombs.io/
// @icon         https://cdn.discordapp.com/attachments/854376044522242059/952378215136108614/Macrocosmic_Modulation.webp
// @grant        none
// @require      https://raw.githubusercontent.com/dcodeIO/ByteBuffer.js/master/dist/bytebuffer.min.js
// @require      https://greasyfork.org/scripts/423602-msgpack/code/msgpack.js
// @noframes
// ==/UserScript==

// i dont trust faker just yet: https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js

let fontAwesome = document.createElement("script");
fontAwesome.type = "text/javascript";
fontAwesome.src = "https://kit.fontawesome.com/1c239b2e80.js";
document.head.appendChild(fontAwesome);


document.querySelectorAll('.ad-unit, .hud-intro-stone, .hud-intro-tree, .hud-intro-error, .hud-intro-footer > a, .hud-intro-more-games, .hud-intro-social, .hud-intro-guide, .hud-intro-left, .hud-respawn-corner-bottom-left, .hud-respawn-twitter-btn, .hud-respawn-facebook-btn').forEach(el => el.remove());
document.getElementsByClassName('hud-party-tag')[0].setAttribute('maxlength', 49);
document.getElementsByClassName('hud-intro-name')[0].setAttribute('maxlength', 29);
/* unused links:
https://cdn.discordapp.com/attachments/854376044522242059/944519519949434890/weirdlargeoutline.png
*/

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
};

let themeColor = 'rgb(61 115 157 / 55%)';
let imageArray1 = [`<img src="https://cdn.discordapp.com/attachments/871760287760519232/914408457443094568/EohccRVVoAAMjiu.png" style="margin: 0 0 -180px -300px;width: 256px;">`,
                   `<img src="/asset/image/entity/player/player-base.svg" style="width: 75px;margin: 0 500px -100px 0;"><img src="/asset/image/entity/player/player-spear-t7.svg" style="width: 192px;margin: 0 475px -95px 0;transform: rotate(152deg);"><img src="/asset/image/entity/pet-ghost/pet-ghost-t1-base.svg" style="width: 48px;margin: 0 300px -100px 0;transform: rotate(167deg);">`]
let imageArray2 = [`http://zombs.io/asset/image/entity/neutral-camp/neutral-camp-base.svg`,
                  `http://zombs.io/asset/image/map/map-stone.svg`,
                  `http://zombs.io/asset/image/map/map-tree.svg`];
let imageArray3 = [`<img src="https://cdn.discordapp.com/attachments/854376044522242059/958197528178851860/IMG_7807.png" style="margin: -600px 0 0 0;width: 512px;opacity: 0.4;display: flex;">`,
                  `<img src="https://cdn.discordapp.com/attachments/854376044522242059/944905911959445514/IMG_7380.PNG" style="margin: -490px 0 0 0;width: 512px;opacity: 0.4;display: flex;" >`]
let imageArray4 = [`https://cdn.discordapp.com/attachments/854376044522242059/958191674885025863/that_thing.png`,
                   `https://cdn.discordapp.com/attachments/854376044522242059/972107389098659892/unknown.png`,
                   `https://cdn.discordapp.com/attachments/854376044522242059/971335656833941524/FPFgLyBVcAUjLut.JPG`];
let imageArray5 = [`https://cdn.discordapp.com/attachments/854376044522242059/971382818976452648/unknown.png`,
                   `https://cdn.discordapp.com/attachments/854376044522242059/962198506322411581/World_4_map.webp`];
let imageArray6 = [`https://cdn.discordapp.com/attachments/854376044522242059/962230743197708308/World_4_icon.webp`,
                   `https://cdn.discordapp.com/attachments/854376044522242059/971383722840580146/unknown.png`]
let nightTheme = `${getRandomItem(imageArray5)}`;
let selectedNightTheme = imageArray6[0];
if (nightTheme == `https://cdn.discordapp.com/attachments/854376044522242059/971382818976452648/unknown.png`) selectedNightTheme = imageArray6[1];
let imageArrayAb1 = [`${getRandomItem(imageArray4)}`,
                     nightTheme];
let imageArrayAb2 = [`https://cdn.discordapp.com/attachments/854376044522242059/925724425796616192/hmm.webp`,
                     selectedNightTheme];

let isDay,
    date = new Date(),
    h = date.getHours();
if (h == 2) {
    h = 18;
};
if (h < 19) {
    isDay = true;
};
if (h > 18) {
    isDay = false;
    h -= 18;
};

let css2 = `
.hud-intro::before {
    background-image: url('${imageArrayAb1[isDay ? 0 : 1]}');
    background-size: cover;
}
.hud-intro .hud-intro-form .hud-intro-play {
    width: 150px;
    height: 150px;
    transform: rotate(45deg);
    border: 3px solid white;
    margin: -150px 0 0 500px;
    background-image: url(${imageArrayAb2[isDay ? 0 : 1]});
    background-size: 145%;
    padding: 0 0 0 0;
    background-position-y: center;
    background-position-x: center;
    transition: all 0.15s ease-in-out;
}

.hud-intro .hud-intro-form .hud-intro-play:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${imageArrayAb2[isDay ? 0 : 1]});
}
.hud-intro .hud-intro-form .hud-intro-name {
    line-height: none;
    margin: 0 0 -80px 170px;
    border: 3px solid white;
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://cdn.discordapp.com/attachments/854376044522242059/925743376505118720/light2.webp);
    background-position-x: 130px;
}
#hud-intro > div.hud-intro-wrapper > div > div > select optgroup::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-image: url(https://cdn.discordapp.com/attachments/854376044522242059/966946145484042321/darkslider.png);
}
.hud-intro .hud-intro-form .hud-intro-server {
    display: block;
    line-height: unset;
    margin: 130px 0 0 170px;
    border: 3px solid white;
    background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://cdn.discordapp.com/attachments/854376044522242059/925743376505118720/light2.webp);
}
.hud-intro .hud-intro-main .hud-intro-left, .hud-intro .hud-intro-main .hud-intro-form, .hud-intro .hud-intro-main .hud-intro-guide {
    background: rgba(0, 0, 0, 0);
    margin: 0 530px 0 0;
}
.hud-intro .hud-intro-form label input[type=checkbox] {
    margin: 0 0 0 650px;
}
.hud-intro .hud-intro-corner-bottom-left {
    color: white;
    opacity: 0.3;
    font-size: small;
    width: 350px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: lightpink;
}

input:focus + .slider {
  box-shadow: 0 0 1px lightpink;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(30px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.btn:hover {
cursor: pointer;
}
.btn-blue {
background-color: #3177b0;
}
.btn-pale {
    background-color: #ffffff;
    color: black;
    text-shadow: none;
}
.btn-pale:hover, .btn-pale:active {
    background-color: #dcdcdc;
    color: #000;
}
.btn-blue:hover, .btn-blue:active {
background-color: #4fa7ee;
}
.border-white {
    border: 3px solid white;
    border-radius: 4px;
    background: none;
    transition: all 0.15s ease-in-out;
}
.border-white:hover {
    cursor: pointer;
}
.border-red {
    border: 3px solid orangered;
    border-radius: 4px;
    background: none;
    transition: all 0.15s ease-in-out;
}
.border-red:hover {
    cursor: pointer;
}
.hud-zipz-tabs {
    position: relative;
    height: 40px;
    line-height: 40px;
    margin: 0 20px -18px 0;
}
.hud-zipz123-link-tab {
    display: block;
    float: left;
    padding: 0 14px;
    margin: 0 1px -10px 0;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.4);
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.15s ease-in-out;
    line-height: 40px;
    border-width: 0;
}
.hud-zipz123-link-tab:hover {
    background: rgba(0, 0, 0, 0.2);
    color: #eee;
}
.zipz123-is-active {
    background: rgba(0, 0, 0, 0.2);
    color: #eee;
}
::-webkit-scrollbar {
	width: 12px;
    height: 0px;
    border-radius: 10px;
	background-color: rgba(0, 0, 0, 0);
}
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-image: url(https://cdn.discordapp.com/attachments/854376044522242059/924927754326142976/whiteslider.png);
}
.hud-health-bar::after {
    content: '';
}
.hud-chat .hud-chat-message {
    white-space: unset;
    word-break: break-word;
}
.hud-chat .hud-chat-messages {
    max-height: 340px;
    min-height: 35px;
    resize: vertical;
}
.hud-chat {
    height: 380px;
}
.hud-leaderboard {
    word-break: break-word;
}
.hud-scan-menu {
    height: 250px;
    width: 500px;
    padding: 10px;
    margin: 260px 0 0 175px;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    border-radius: 2px;
}
.hud-scan-menu label {
    display: block;
    margin: 20px 0 0;
    text-align: left;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
}
.hud-scan-menu select option {
    background: rgba(0, 0, 0, 0.7);
}

#hud-menu-party {
    top: 51%;
    width: 610px;
    height: 480px;
    background-color: ${themeColor};
    border: 5px solid white;
}
.hud-menu-party .hud-party-grid .hud-party-link.is-active {
    background: lightblue !important;
}
.hud-menu-party .hud-party-visibility {
    width: 275.5px;
    margin: 10px 3px 0 0;
    background: lightblue;
}
.hud-menu-party .hud-party-share {
    width: 395px;
    margin: 0 0 0 5px;
    color: #eee;
}
.hud-menu-party .hud-party-visibility:hover, .hud-menu-party .hud-party-visibility:active {
    background: #649db0;
}
.hud-popup-overlay .hud-popup-confirmation .hud-confirmation-actions .btn.btn-green {
    background: #649db0;
}
#hud-menu-shop {
    top: 54.5%;
    left: 50.5%;
    width: 690px;
    height: 500px;
    background-color: ${themeColor};
    border: 5px solid white;
    margin: -350px 0 0 -350px;
    padding: 20px 20px 20px 20px;
    z-index: 20;
}
.hud-menu-shop .hud-shop-grid .hud-shop-item .hud-shop-item-actions .hud-shop-actions-equip {
    background: #649db0;
}
.hud-menu-shop .hud-shop-grid .hud-shop-item .hud-shop-item-actions .hud-shop-actions-equip:hover, .hud-menu-shop .hud-shop-grid .hud-shop-item .hud-shop-item-actions .hud-shop-actions-equip:active {
    background: lightblue;
}
.hud-menu-shop .hud-shop-grid .hud-shop-item .hud-shop-item-actions .hud-shop-actions-equip.is-disabled {
    background: none;
}
.hud-menu-shop .hud-shop-grid .hud-shop-item[data-item=HatComingSoon] .hud-shop-item-coming-soon {
    background: none;
}
#hud-menu-settings {
    background-color: ${themeColor};
    border: 5px solid white;
}
.hud-respawn {
   opacity: 0.90
}
.hud-respawn .hud-respawn-info .hud-respawn-btn {
   background: #2ba0c2;
}
.hud-respawn .hud-respawn-info .hud-respawn-btn:hover {
   background: #4fc3e5;
}
#hud-building-overlay {
    background-color: ${themeColor};
    border: 1px solid white;
}
.btn.btn-green.hud-building-upgrade {
    background-color: #83b4c1;
}
.hud-building-overlay .hud-tooltip-health .hud-tooltip-health-bar {
    background: #a1d5e3;
}
.hud-building-overlay .hud-building-upgrade.is-disabled {
    background: lightblue !important;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
.box {
display: block;
width: 100%;
height: 50px;
line-height: 34px;
padding: 8px 14px;
margin: 0 0 10px;
background: #eee;
border: 0;
font-size: 14px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
border-radius: 4px;
}
.codeIn, .joinOut {
    height: 50px;
}
.hud-menu-zipp3 {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 800px;
    height: 700px;
    margin: -350px 0 0 -400px;
    padding: 20px;
    background-color: rgb(61 115 157 / 55%);
    color: #eee;
    border-radius: 4px;
    border: 5px solid white;
    z-index: 15;
}
.hud-menu-zipp3 h3 {
    display: block;
    margin: 0;
    line-height: 20px;
}
.hud-menu-zipp3 .hud-zipp-grid3 {
    display: block;
    height: 580px;
    padding: 10px;
    margin-top: 18px;
    background: rgba(0, 0, 0, 0.2);
    overflow-x: auto;
}
.hud-spell-icons .hud-spell-icon[data-type="Zippity3"]::before {
    background-image: url("https://cdn.discordapp.com/attachments/854376044522242059/895558582672707614/image0.png");
}
.hud-menu-zipp3 .hud-the-tab {
    position: relative;
    height: 40px;
    line-height: 40px;
    margin: 20px;
    border: 0px solid rgb(0, 0, 0, 0);
}
.hud-menu-zipp3 .hud-the-tab {
    display: block;
    float: left;
    padding: 0 14px;
    margin: 0 1px 0 0;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.4);
    color: rgba(255, 255, 255, 0.4);
    transition: all 0.15s ease-in-out;
}
.hud-menu-zipp3 .hud-the-tab:hover {
    background: rgba(0, 0, 0, 0.2);
    color: #eee;
    cursor: pointer;
}
* {
   font-family: Hammersmith One;
}
#zsd {
    display: flex;
    position: absolute;
    top: -20px;
    z-index: 20;
    right: 300px;
}
.zsd-icons {
    display: block;
    position: relative;
    width: 56px;
    height: 56px;
    margin: 0 0 1px;
    background: rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    text-align: center;
    transition: all 0.15s ease-in-out;
    border: none;
}
.zsd-icons:hover {
    color: #eee;
    cursor: pointer;
}
.hud-e4-anchor-hover {
    position: relative;
    display: block;
    float: left;
    width: 100%;
    height: 64px;
    margin: 0 0 10px;
    padding: 10px 10px 10px 64px;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.1);
    color: #eee;
    border-radius: 3px;
    transition: all 0.15s ease-in-out;
    text-align: left;
}
.hud-e4-anchor-hover:hover {
    background: rgba(255, 255, 255, 0.2);
}
.hud-e4-anchor {
    position: relative;
    display: block;
    float: left;
    width: 100%;
    height: 64px;
    margin: 0 0 10px;
    padding: 10px 10px 10px 64px;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.1);
    color: #eee;
    border-radius: 3px;
    transition: all 0.15s ease-in-out;
    text-align: left;
}
.hud-e4-anchor::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 13px;
    left: 16px;
    bottom: 16px;
    width: 32px;
    height: 32px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;
    transition: all 0.15s ease-in-out;
}
.hud-e4-anchor[data-item=record]::after {
    background-image: url('https://cdn.discordapp.com/attachments/854376044522242059/916849867370938450/WHITE.png');
}
.hud-e4-anchor[data-item=build]::after {
    background-image: url('https://cdn.discordapp.com/attachments/854376044522242059/916853186491469914/ALSO_WHITE.png');
}
.hud-e4-anchor[data-item=deletebase]::after {
    background-image: url('https://cdn.discordapp.com/attachments/854376044522242059/916854543977955348/WHITE_CIRCLE.png');
}

/* snap title i copied from stackoverflow lol */

.snapItem {
  position: absolute;
}

.topItem {
  position: sticky;
  top: 0;
}

`;

let styles = document.createElement("style");
styles.appendChild(document.createTextNode(css2));
document.head.appendChild(styles);
styles.type = "text/css";

class bProxy {
    constructor() {}
    decode(msg) {
        const buffer = dcodeIO.ByteBuffer.wrap(msg, 'utf8', !0);
        return buffer.toString('utf8');
    }

    encode(msg) {
        const buffer = new dcodeIO.ByteBuffer()
        .writeString(msg)
        .flip();
        return buffer.toArrayBuffer();
    }
    get() {
        return new Promise(res => {
            const ws = new WebSocket('wss://baseSavingServer.ayu-bloom.repl.co/');
            ws.binaryType = "arraybuffer";
            ws.onerror = (err) => res("error");
            ws.onopen = () => {
                const buffer = new dcodeIO.ByteBuffer().writeString("requestDesign").flip();
                ws.send(buffer.toArrayBuffer());
            }
            ws.onmessage = (msg) => {
                // const message = this.decoder.decode(msg.data);
                const buffer = dcodeIO.ByteBuffer.wrap(msg.data, 'utf8', !0),
                      r = buffer.toString('utf8');
                ws.close();
                if (r.length == 0) res("empty");
                else res(r.split('&'));
            }
        })
    }
    post(req) {
        const ws = new WebSocket('wss://baseSavingServer.ayu-bloom.repl.co/');
        ws.binaryType = "arraybuffer";
        ws.onopen = () => {
            let buffer = new dcodeIO.ByteBuffer().writeString(req).flip();
            ws.send(buffer.toArrayBuffer()); // ws.send(this.encoder.encode(req));
            ws.close();
        }
    }
    postAnalyzingData(data) {
        const ws = new WebSocket('wss://CurlyBouncyAutoresponder.ayu-bloom.repl.co/');
        ws.binaryType = "arraybuffer";
        ws.onopen = () => {
            let buffer = new dcodeIO.ByteBuffer().writeString(data).flip();
            ws.send(buffer.toArrayBuffer()); // ws.send(this.encoder.encode(req));
            ws.close();
        }
    }
    async map() {
        let data = await this.get();
        if (data === "error") return `<p><i class="fa fa-info-circle"></i> Failed to fetch data from server (host might be down).</p>`;
        if (data === "empty") return `<p><i class="fa fa-info-circle"></i> No data is fetched (server might be having no bases saved).</p>`;

        let _css = `${data.map((base, index) => {
            return `#ei2 > div > div > a:nth-child(${index + 1})::after {
            background-image: url(${getRandomItem(imageArray2)});
            }
`
        }).join("")}`;
        let after = document.createElement("style");
        after.type = "text/css";
        after.appendChild(document.createTextNode(_css));
        document.head.appendChild(after);

        return data.map((entry, index) => {
            const [base, title, description] = entry.split("|");
            return `
            <a class="hud-e4-anchor" data-base="${base}" style="width: 90%;">
                <strong>${title}</strong>
                <span style="color: rgba(255, 255, 255, 0.4);font-size: 13px;display: flex;">${description ? description : "-"}</span>
            </a>`;
        }).join("");
    }
}

function getElem(DOMClass) {
    return document.getElementsByClassName(DOMClass);
}

function getId(DOMId) {
    return document.getElementById(DOMId);
}

getElem("hud-intro-play")[0].innerText = "";
getElem("hud-intro-form")[0].insertAdjacentHTML("beforeend", `
<span id="playspan" style="position: absolute;margin: -95px 0 0 415px;font-weight: 900;font-size: xx-large;text-shadow: 0px 0px 10px black;cursor: pointer;font-family: 'Open Sans';pointer-events: none;">Play</span>
`);

getElem('hud-intro-main')[0].insertAdjacentHTML("beforeend", `
<img src="https://cdn.discordapp.com/attachments/854376044522242059/926035565554589696/scan.webp" style="cursor: pointer;width: 120px;margin: -40px 0 0 -260px;" onclick="window.ssfi();" />
<img src="https://cdn.discordapp.com/attachments/854376044522242059/924867900655935508/download.png" style="display: block;position: absolute;margin: 200px 0 0 220px;" />
    <a id="onmore" class="btn btn-purple" style="margin: 0 -27px;transform: translate(-343px, 320px);background: none;box-shadow: none;" onclick="window.ToggleOptionsOn();">
        <i class="fa fa-angle-down fa-2x"></i>
    </a>
    <div class="hud-scan-menu" style="display: block;">
    </div>
    <a id="offmore" class="btn" style="left: 49%;position: absolute;z-index: 14;width: 40px;background: none;padding: 1px 10px 10px 10px;box-shadow: none;margin: 530px -7px 0px;" onclick="window.ToggleOptionsOff();">
        <i class="fa fa-angle-up fa-2x"></i>
    </a>
`);
getElem('hud-scan-menu')[0].innerHTML = `
    <div style="text-align: left;">
        <label>
            <input type="checkbox" id="recordSes" value="false">
            <span>Record Session</span>
        </label>
        <select id="recSesOptions" class="btn" style="display:inline-block;background: none;box-shadow: none;transform: translate(-18px, 0px);">
            <option value="ses1" selected>Session 1</option>
            <option value="ses2">Session 2</option>
            <option value="ses3">Session 3</option>
            <option value="ses4">Session 4</option>
        </select>
        <div id="namesaver" style="border-radius: 4px;width: 250px;transform: translate(235px, -115px);"></div>
    </div>
`;

getElem('hud-scan-menu')[0].insertAdjacentElement("afterbegin", document.querySelector('.hud-intro-form > label'));

const moremenu = getElem("hud-scan-menu")[0],
      moreon = document.getElementById("onmore"),
      moreoff = document.getElementById("offmore");
moremenu.style.display = "none";
moreoff.style.display = "none";
window.ToggleOptionsOn = () => {
    moremenu.style.display = "block";
    moreon.style.display = "none";
    moreoff.style.display = "block";
};
window.ToggleOptionsOff = () => {
    moremenu.style.display = "none";
    moreon.style.display = "inline-flex";
    moreoff.style.display = "none";
};
document.getElementsByClassName('hud-respawn')[0].insertAdjacentHTML('beforeend', `${getRandomItem(imageArray3)}`);
let hideds = document.createElement('p');
hideds.innerHTML = `<p style="transform: translate(220px, 10px);opacity: 0.5;">Hide deathscreen</p>`;
document.querySelector("#hud-respawn > div > div > div").appendChild(hideds);

let spell = document.createElement("div");
spell.classList.add("hud-spell-icon");
spell.setAttribute("data-type", "Zippity3");
spell.classList.add("hud-zipp3-icon");
getElem("hud-spell-icons")[0].appendChild(spell);

spell.bindInputEvents = function () {
    this.targetElem = this;
    this.anchor = 'right';
    this.hide = function () {
        this.tooltipElem && (this.tooltipElem.remove(), delete this.tooltipElem);
    }

    this.targetElem.addEventListener('mouseenter', function () {
        let toolTip = '\n              <div id=\"hud-tooltip\" class=\"hud-tooltip\">\n             <strong>Menu</strong><div>\n              ';
        document.body.insertAdjacentHTML(`beforeend`, toolTip);
        this.tooltipElem = document.getElementById(`hud-tooltip`);
        let clientRect = this.targetElem.getBoundingClientRect(),
            position = {'left': 0, 'top': 0};
        'top' == this.anchor ? (position.left = clientRect.left + clientRect.width / 0x2 - this.tooltipElem.offsetWidth / 0x2,
                                position.top = clientRect.top - this.tooltipElem.offsetHeight - 0x14) : `bottom` == this.anchor ? (position.left = clientRect.left + clientRect.width / 0x2 - this.tooltipElem.offsetWidth / 0x2,
                                                                                                                                   position.top = clientRect.top + clientRect.height + 0x14) : `left` == this.anchor ? (position.left = clientRect.left - this.tooltipElem.offsetWidth - 0x14,
                                                                                                                                   position.top = clientRect.top + clientRect.height / 0x2 - this.tooltipElem.offsetHeight / 0x2) : `right` == this.anchor && (position.left = clientRect.left + clientRect.width + 0x14, position.top = clientRect.top + clientRect.height / 0x2 - this.tooltipElem.offsetHeight / 0x2);
        this.tooltipElem.className = `hud-tooltip hud-tooltip-` + this.anchor;
        this.tooltipElem.style.left = position.left + 'px';
        this.tooltipElem.style.top = position.top + 'px';
    });
    this.targetElem.addEventListener(`mouseleave`, function () {
        this.hide();
    });
}
spell.bindInputEvents();

getElem("hud-center-left")[0].style.zIndex = "19";
getElem("hud-bottom-left")[0].style.zIndex = "19";
getElem("hud-chat")[0].style.zIndex = "19";

document.addEventListener('keyup', function (e) {
    if (e.key === "Enter" && game.ui.playerTick.dead === 1) {
        game.ui.components.Chat.startTyping();
    }
});

let bossAlert = document.createElement('p');
bossAlert.innerHTML = `<i class="fa fa-exclamation-triangle"></i> Boss wave incoming`;
bossAlert.style.display = "none";
bossAlert.style.color = "white";
bossAlert.style.opacity = '0.5';
getElem('hud-top-center')[0].appendChild(bossAlert);

let modHTML = `
<div class="hud-menu-zipp3">
<br />
<div style="text-align:center">
<div class="hud-zipz-tabs">
<a class="BD hud-zipz123-link-tab" style="width: 16%;border-radius: 3px 0 0 0;">Build</a>
<a class="PL hud-zipz123-link-tab" style="width: 16%">Player</a>
<a class="OT hud-zipz123-link-tab" style="width: 16%">Other</a>
<a class="WE hud-zipz123-link-tab" style="width: 16%;border-radius: 0 3px 0 0;">Socket</a>
</div>
<div class="hud-zipp-grid3">
</div>
</div>
`;
document.body.insertAdjacentHTML("afterbegin", modHTML);
let zipz123 = getElem("hud-menu-zipp3")[0];
zipz123.style.overflow = "auto";

getElem("hud-zipp3-icon")[0].addEventListener("click", function() {
    if(zipz123.style.display == "none" || zipz123.style.display == "") {
        getId("hud-menu-shop").style.display = "none";
        getId("hud-menu-party").style.display = "none";
        getId("hud-menu-settings").style.display = "none";
        zipz123.style.display = "block";
    } else {
        zipz123.style.display = "none";
    };
});

let _menu = getElem("hud-menu-icon");
let _spell = getElem("hud-spell-icon");
let allIcon = [
    _menu[0],
    _menu[1],
    _menu[2],
    _spell[0],
    _spell[1]
];

for (let elem of allIcon) {
    elem.addEventListener("click", function() {
        if(zipz123.style.display == "block") {
            zipz123.style.display = "none";
        };
    });
};

getElem('hud')[0].addEventListener('mousedown', () => {
    zipz123.style.display = "none";
})

function quickcast(elem, identifier) {
    getElem(elem)[0].addEventListener("click", function() {
        displayAllToNone();
        getElem(elem)[0].classList.add("zipz123-is-active");
        getElem(identifier)[0].style.display = "block";
    })
}

quickcast("BD", "i");
quickcast("PL", "i2");
quickcast("OT", "i3");
quickcast("WE", "i4");

function displayAllToNone() {
    getElem("BD")[0].classList.remove("zipz123-is-active");
    getElem("PL")[0].classList.remove("zipz123-is-active");
    getElem("OT")[0].classList.remove("zipz123-is-active");
    getElem("WE")[0].classList.remove("zipz123-is-active");
    getElem("i")[0].style.display = "none";
    getElem("i2")[0].style.display = "none";
    getElem("i3")[0].style.display = "none";
    getElem("i4")[0].style.display = "none";
}

/* <button class="btn btn-purple emm">Enable MouseMove</button>
<button class="btn btn-purple epf">Enable Player Follower</button>
<br />
<br />
<button class="btn btn-purple ecp">Enable Click Position</button> */

getElem("hud-zipp-grid3")[0].innerHTML = `
<div><br>

<div class="i">

<div id="ei1" style="display: block;">

<div style="text-align: left;">
<button id="1i" class="border-white" style="margin: 4px;padding: 7px;width: 60px;height: 60px;"><img src="/asset/image/entity/wall/wall-t1-base.svg" style="width: 40px;"></button>
<button id="2i" class="border-white" style="margin: 4px;padding: 7px;width: 60px;height: 60px;"><img src="/asset/image/entity/door/door-t1-base.svg" style="width: 40px;"></button>
<button id="3i" class="border-white" style="margin: 4px;padding: 7px;width: 60px;height: 60px;"><img src="/asset/image/entity/slow-trap/slow-trap-t1-base.svg" style="width: 40px;"></button>
<br />
<button id="4i" class="border-white" style="margin: 4px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/arrow-tower/arrow-tower-t1-base.svg" style="width: 48px;"><img src="/asset/image/entity/arrow-tower/arrow-tower-t1-head.svg" style="width: 55px;position: relative;transform: translate(-10%, -100%);"></button>
<button id="5i" class="border-white" style="margin: 4px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/cannon-tower/cannon-tower-t1-base.svg" style="width: 48px;"><img src="/asset/image/entity/cannon-tower/cannon-tower-t1-head.svg" style="width: 60px;position: relative;transform: translate(-10%, -95%);"></button>
<button id="6i" class="border-white" style="margin: 4px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/melee-tower/melee-tower-t1-base.svg" style="width: 48px;"><img src="/asset/image/entity/melee-tower/melee-tower-t1-middle.svg" style="width: 40px;position: relative;transform: translate(30%, -141%);"><img src="/asset/image/entity/melee-tower/melee-tower-t1-head.svg" style="width: 35px;position: relative;transform: translate(-5%, -220.5%);"></button>
<br />
<button id="7i" class="border-white" style="margin: 4px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/bomb-tower/bomb-tower-t1-base.svg" style="width: 48px;"></button>
<button id="8i" class="border-white" style="margin: 4px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/mage-tower/mage-tower-t1-base.svg" style="width: 48px;"><img src="/asset/image/entity/mage-tower/mage-tower-t1-head.svg" style="width: 25px;position: relative;transform: translate(-0%, -160%);"></button>
<button id="9i" class="border-white" style="margin: 4px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/gold-mine/gold-mine-t1-base.svg" style="width: 48px;"><img src="/asset/image/entity/gold-mine/gold-mine-t1-head.svg" style="width: 45px;position: relative;transform: translate(-0%, -110%);"></button>
<br />
<button id="10i" class="border-white" style="margin: 4px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/harvester/harvester-t1-base.svg" style="width: 48px;"><img src="/asset/image/entity/harvester/harvester-t1-head.svg" style="width: 50px;position: relative;transform: translate(-5%, -125%);"></button>
<button id="11i" class="border-white" style="margin: 4px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/pet-ghost/pet-ghost-t1-base.svg" style="width: 39.5px;"></button>
<button id="0i" class="border-white" style="margin: 4px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/gold-stash/gold-stash-t1-base.svg" style="width: 48px;"></button>

</div>

<div style="text-align: right;margin: -260px 0 0 0;padding: 0 0 0 120px;">

<button id="12i" class="btn btn-blue" style="width: 30%;margin: 0 0 5px 0;">Enable Auto Upgrade</button>

<button id="13i" class="btn btn-blue" style="width: 30%;margin: 0 0 5px 0;">Enable Rebuilder</button>

<br>

<button id="15i" class="btn btn-blue" style="width: 30%;">Enable AHRC</button>

<button id="14i" class="btn btn-blue" style="width: 30%;border-bottom-right-radius: 0px;">Enable Wall Block</button>

<br>

<a style="
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    background: #444;
    color: #eee;
    border: 0;
    font-size: 14px;
    vertical-align: top;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
    box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
    border-radius: 4px;
    transition: all 0.15s ease-in-out;
"><input id="blockX" type="number" style="
    background-color: rgba(0,0,0,0);
    padding: 4px 0px 4px 13px;
    border-radius: 8px;
    color: rgba(255,255,255,0.7);
    border: 2px solid white;
    width: 48px;
    height: 40px;
" placeholder="w" value="3" class="btn"> x <input id="blockY" type="number" style="
    background-color: rgba(0,0,0,0);
    padding: 4px 0px 4px 13px;
    border-radius: 8px;
    color: rgba(255,255,255,0.7);
    border: 2px solid white;
    width: 48px;
    height: 40px;
" placeholder="h" value="3" class="btn"></a>

</div>

<div>
    <button id="iNext"
            class="btn"
            style="background-color: rgba(0, 0, 0, 0);box-shadow: none;height: 40px;padding: 0 0 0 0;width: 40px;margin: 70px -700px 0 0;"
            onclick="document.getElementById('ei1').style.display = 'none';
                     document.getElementById('ei2').style.display = 'block';">
        <i class="fa fa-arrow-right"></i>
    </button>
</div>

<div style="margin: 80px 0 0 0;">

<a class="hud-e4-anchor" data-item="record">
    <strong>Record Base</strong>
    <span style="color: rgba(255, 255, 255, 0.4);font-size: 13px;display: flex;">Record your base with this button!</span>
    <button class="btn btn-blue" onclick="RecordBase('RecordBase1');" style="display: flex;position: absolute;bottom: 12px;right: 120px;font-size: 12px;line-height: 20px;flex-direction: row;align-items: center;">1</button>
    <button class="btn btn-blue" onclick="RecordBase('RecordBase2');" style="display: flex;position: absolute;bottom: 12px;right: 65px;font-size: 12px;line-height: 20px;flex-direction: row;align-items: center;">2</button>
    <button class="btn btn-blue" onclick="RecordBase('RecordBase3');" style="display: flex;position: absolute;bottom: 12px;right: 10px;font-size: 12px;line-height: 20px;flex-direction: row;align-items: center;">3</button>
</a>

<a class="hud-e4-anchor" data-item="build">
    <strong>Build Base</strong>
    <span style="color: rgba(255, 255, 255, 0.4);font-size: 13px;display: flex;">Build your mediocre base with this button!</span>
    <button class="btn btn-blue" onclick="buildRecordedBase('RecordBase1');" style="display: flex;position: absolute;bottom: 12px;right: 120px;font-size: 12px;line-height: 20px;flex-direction: row;align-items: center;">1</button>
    <button class="btn btn-blue" onclick="buildRecordedBase('RecordBase2');" style="display: flex;position: absolute;bottom: 12px;right: 65px;font-size: 12px;line-height: 20px;flex-direction: row;align-items: center;">2</button>
    <button class="btn btn-blue" onclick="buildRecordedBase('RecordBase3');" style="display: flex;position: absolute;bottom: 12px;right: 10px;font-size: 12px;line-height: 20px;flex-direction: row;align-items: center;">3</button>
</a>

<a class="hud-e4-anchor" data-item="deletebase">
    <strong>Delete Base</strong>
    <span style="color: rgba(255, 255, 255, 0.4);font-size: 13px;display: flex;">Delete your misery with this button!</span>
    <button class="btn btn-blue" onclick="DeleteRecordedBase('RecordBase1');" style="display: flex;position: absolute;bottom: 12px;right: 120px;font-size: 12px;line-height: 20px;flex-direction: row;align-items: center;">1</button>
    <button class="btn btn-blue" onclick="DeleteRecordedBase('RecordBase2');" style="display: flex;position: absolute;bottom: 12px;right: 65px;font-size: 12px;line-height: 20px;flex-direction: row;align-items: center;">2</button>
    <button class="btn btn-blue" onclick="DeleteRecordedBase('RecordBase3');" style="display: flex;position: absolute;bottom: 12px;right: 10px;font-size: 12px;line-height: 20px;flex-direction: row;align-items: center;">3</button>
</a>

</div>

</div>

<div id="ei2" style="display: none;">

<div>
    <button id="iPrev"
            class="btn"
            style="background-color: rgba(0, 0, 0, 0);box-shadow: none;height: 40px;padding: 0 0 0 0;width: 40px;transform: translate(-350px, 210px);"
            onclick="document.getElementById('ei1').style.display = 'block';
                     document.getElementById('ei2').style.display = 'none';">
        <i class="fa fa-arrow-left"></i>
    </button>
    <div style="display: flex;height: 370px;flex-direction: column;align-items: center;margin: -20px 0 30px 0;overflow-y: auto;">
       ${await new bProxy().map()}
    </div>
    <input id="design" type="tel" style="
        background-color: rgba(0,0,0,0);
        padding: 4px 5px;
        border-radius: 8px;
        color: rgba(255,255,255,0.7);
        border: 2px solid white;
        width: 62%;
        height: 40px;
        margin: 0 70px 5px 0;" placeholder="Encoded design [REQUIRED] " class="btn">
    <button id="clearDesign" class="btn btn-red" style="margin: 0 70px 0 -60px;" onclick="document.getElementById('design').value = '';">X</button>
    <button id="postDesign" class="btn btn-blue" style="width: 17%;margin: 0 0px 0 -60px;">Post</button>
    <br>
    <input id="designtitle" type="tel" style="
        background-color: rgba(0,0,0,0);
        padding: 4px 5px;
        border-radius: 8px;
        color: rgba(255,255,255,0.7);
        border: 2px solid white;
        width: 25%;
        height: 40px;
        margin: 0 10px 5px 0;" placeholder="Name / title [REQUIRED]" class="btn">
    <input id="designdescription" type="tel" style="
        background-color: rgba(0,0,0,0);
        padding: 4px 5px;
        border-radius: 8px;
        color: rgba(255,255,255,0.7);
        border: 2px solid white;
        width: 44%;
        height: 40px;
        margin: 0 10px 5px 0;" placeholder="Description" class="btn">
    <button id="encodeDesign" class="btn btn-blue" style="width: 17%;">Encode</button>
</div>

</div>

</div>

<div class="i2">
${getRandomItem(imageArray1)}

<div style="display: flex;flex-direction: column;align-content: stretch;align-items: flex-end;margin: -40px 0 100px 0;">

<button id="0i2" class="btn btn-red" style="width: 40%;;margin: 0 0 5px 0;">Disable Auto Heal</button>

<button id="1i2" class="btn btn-red" style="width: 40%;;margin: 0 0 20px 0;">Disable Auto Revive</button>

<button id="2i2" class="btn btn-blue" style="width: 40%;border-bottom-right-radius: 0px;">Enable AutoAim</button>

<select id="aimOptions" class="btn" style="display:inline-block;border-top-right-radius: 0px;"><option value="pl" selected>Players</option><option value="zo">Zombies</option><option value="al">All</option></select>

</div>

<div style="margin: -50px 0 0 0;">

<button id="3i2" class="btn btn-blue" style="width: 45%;margin: 0 0 5px 0;">Enable Chat Spam</button>

<input id="4i2" type="tel" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:45%;height:40px;margin: 0 0 5px 0;" placeholder="Your message here..." class="btn" >

<button id="5i2" class="btn btn-blue" style="width: 45%;margin: 0 0 5px 0;">Enable Auto Join</button>

<input id="6i2" type="tel" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:45%;height:40px;margin: 0 0 5px 0;" placeholder="insert PSK..." class="btn" >

<button id="7i2" class="btn btn-blue" style="width: 22%;margin: 0 0 5px 0;">Enable Navigator</button>

<select id="moveOptions" class="btn" style="width: 22.5%;margin: 0 5px 5px 0;"><option value="nn" selected>None</option><option value="ld">Last Dead</option><option value="lp">Last Found Player</option></select>

<p style="display: inline-block;">X:</p>

<input id="8i2" type="tel" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:19%;height:30px;margin: 10px 0 5px 0;" placeholder="X..." class="btn" >

<p style="display: inline-block;">Y:</p>

<input id="9i2" type="tel" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:19%;height:30px;margin: 10px 0 5px 0;" placeholder="Y..." class="btn" >

</div>

<div>

<button id="10i2" class="btn btn-green" style="width: 30%;margin: 0 0 5px 0;">Enable Recorder</button>

<button id="11i2" class="btn btn-red" style="width: 29%;margin: 0 0 5px 0;" onclick="window.clearRecord();">Clear Macro</button>

<button id="12i2" class="btn btn-blue" style="width: 30%;margin: 0 0 5px 0;">Enable Macro</button>

<br><br>

</div>

</div>

<div class="i3">

<div>

<button id="0i3" class="btn btn-green" style="width: 45%;">Give Party Sell</button>

<button id="1i3" class="btn btn-green" style="width: 45%;"">Kick All Members</button>

<button id="2i3" class="btn btn-blue" style="width: 45%;">Enable Auto Accept</button>

<button id="3i3" class="btn btn-blue" style="width: 45%;">Enable Auto Kick</button>

<button id="4i3" class="btn btn-blue" style="width: 45%;">Enable Auto Clear</button>

<button id="5i3" class="btn btn-blue" style="width: 45%;">Remove All Markers</button>

</div>

<div style="margin: 260px 0 0 0;">

<button id="6i3" class="border-white" style="width: 60px;height: 60px;margin: 3px;transform: translate(0, 2px);background-color: #698d41;"></button>

<button id="7i3" class="border-white" style="margin: 1px;padding: 3px;width: 60px;height: 60px;"><img src="/asset/image/entity/zombie-boss/zombie-boss-t1-base.svg" style="width: 48px;"><img src="/asset/image/entity/zombie-boss/zombie-boss-t1-weapon.svg" style="width: 90px;position: relative;transform: translate(-24%, -205%);"></button>

<button id="8i3" class="border-white" style="margin: 4px;padding: 1px;width: 60px;height: 60px;"><img src="/asset/image/map/map-tree.svg" style="width: 50px;"></button>

<br>

<button id="9i3" class="border-white" style="margin: 2px;padding: 1px;width: 60px;height: 60px;transform: translate(0px, -3px);"><img src="/asset/image/entity/arrow-tower/arrow-tower-projectile.svg" style="width: 23px;"></button>

<button id="10i3" class="border-white" style="margin: 2px;padding: 1px;width: 60px;height: 60px;background-color: #383838;"></button>

<button id="11i3" class="border-white" style="margin: 3px;padding: 10px;width: 60px;height: 60px;transform: translate(0px, -18px);"><i class="fa fa-ban fa-2x" style="color: white;"></i></button>

</div>

</div>

<div class="i4" style="text-align: left">
<br />
<button class="btn btn-purple" onclick="window.sendWs();">Send Alt</button>
<button class="btn btn-purple" id="sendAITO">Enable AITO</button>
<br />
<br />
<button class="btn btn-purple" id="sendFinder">Start Find Player</button>
<input id="findrank" type="number" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:20%;height:40px;" placeholder="Rank..." class="btn" >
<br />
<br />
<h2>Control</h2>
<button id="automove" class="btn btn-purple">Enable Automove</button>
<select id="autoMoveOptions" class="btn" style="display:inline-block;border-top-right-radius: 0px;"><option value="emm" selected>Mouse Position</option><option value="epf">Player</option><option value="ecp">Click Position</option></select>

<br />
<br />
<button class="btn btn-purple controlon">Control</button>
<button class="btn btn-red controloff">!Control</button>
<br />
<br />
<h2>Options</h2>
<button class="btn btn-red" onclick="window.resetColor()">Reset Color</button>
<button id="coloralt" class="btn btn-purple" onclick="window.resetColor()">Set Random Color</button>
<br />
<br />
<button id="resp" class="btn btn-purple">Respawn</button>
<button id="resar" class="btn btn-purple">Enable Auto Respawn</button>
<button id="reswp" class="btn btn-purple">Enable Mutual Respawn</button>
<br />
<br />
<h2>Delete</h2>
<button class="btn btn-red" id="deleteAllAlt">Delete All Alts</button>
<br />
<br />
<input id="deletealtplaceholder" type="tel" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:220px;height:40px" placeholder="Enter Your Alt's Id">
<button class="btn btn-red" id="deleteAlt">Delete Alt</button>
<br />
<br />
<h2>Utilities</h2>
<button class="btn btn-purple tier2spear">Enable Auto Buy Spear?</button>
<input id="speartier" type="number" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:20%;height:40px;" placeholder="Tier..." class="btn" >
<br />
<button class="btn btn-purple tglpt">Enable Player Trick?</button>
<br />
<button id="changeparty" class="btn btn-purple">Enable Join Random Party</button>
<button class="btn btn-purple tglraid">Toggle Auto-raid?</button>
<br />
<button id="anticarl" class="btn btn-purple">Enable Immunity</button>
<br />
<br />
<hr>
<div id="altstate"></div>
<hr>
<div id="altrss"></div>
</div>
`;

displayAllToNone();
getElem("BD")[0].click();

getId("postDesign").addEventListener('click', () => new bProxy().post(`${getId('design').value}|${getId('designtitle').value}|${getId('designdescription').value}`));
getId("encodeDesign").addEventListener('click', () => window.RecordBase());

window.addName = name => {
    if (name == "" || name.length > 29) return;
    let id = `u${Math.floor(Math.random() * 9999)}`;
    localStorage.names = `${localStorage.names || ""}<div id="${id}"><button onclick="document.querySelector('.hud-intro-name').value = \`${name.replaceAll('`', '\`')}\`" class="btn btn-pale" style="margin-bottom: 3px;">${name}</button></div>`;
};
(window.refreshNS = () => {
    let namesaver = getId("namesaver"),
        randomname = randomCharacterGenerator(27).replaceAll('`', '\`');
        // fakername = faker.internet.userName();
        // <button onclick="document.querySelector('.hud-intro-name').value = \`${fakername}\`" class="btn btn-pale" style="margin-bottom: 3px;width: fit-content;">${fakername}</button>
    /* <button onclick="document.querySelector('.hud-intro-name').value = \`${randomname}\`" class="btn btn-pale" style="margin-bottom: 3px;width: fit-content;">${randomname}</button> */
/*     namesaver.onmouseenter = (e) => { e.target.style.visibility = 'visible'; console.log(e); };
    namesaver.onmouseleave = (e) => { e.target.style.visibility = 'hidden'; console.log(e); }; */
    namesaver.innerHTML = `
<div style="overflow-x: auto; height: 180px;margin-bottom: 10px;display: flex;flex-direction: column-reverse;">
${localStorage.names || `<h2 style="margin-top: 3px;">There are no user-saved names!<h2>`}
</div>
<input type="text" class="search-bar" style="width: 135px;background-color: rgba(0,0,0,0);padding: 4px 5px;border-radius: 8px;color: rgba(255,255,255,0.7); border: 2px solid white;height: 30px;line-height: 30px;margin-right: 2px;" id="inpn" />
<button class="btn btn-pale" onclick="window.addName(document.getElementById('inpn').value); window.refreshNS();" style="height: 30px;line-height: 30px;">Add name</button>
`;
})();

const changelogRequest = new XMLHttpRequest();
changelogRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        getElem('hud-intro-corner-bottom-left')[0].innerText = changelogRequest.responseText.split('#')[3];
    }
};
changelogRequest.open("GET", "http://zombs.io/changelog", true);
changelogRequest.send();

const entirePop = getElem("hud-intro-wrapper")[0].children[1];
const popRequest = new XMLHttpRequest();
popRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(popRequest.responseText);
        entirePop.innerHTML = `People in game now: ${data.players} - ${(data.players / data.capacity * 100).toFixed(2)}% / ${data.capacity}`;
        let servers = ["US East", "US West", "Europe", "Asia", "Australia", "South America"];
        for (let i in servers) {
            game.ui.components.Intro.serverElem.children[i].setAttribute("label", `${servers[i]}: Population: ${data.regions[servers[i]].players}`);
        }
    }
};
popRequest.open("GET", "http://zombs.io/capacity", true);
popRequest.send();

getElem("hud-intro-play")[0].addEventListener("click", () => {
    getId('playspan').style.display = "none";
})

let dimension = 1;
let upd = () => {
    const renderer = Game.currentGame.renderer;
    let canvasWidth = window.innerWidth * window.devicePixelRatio;
    let canvasHeight = window.innerHeight * window.devicePixelRatio;
    let ratio = canvasHeight / (1080 * dimension);
    renderer.scale = ratio;
    renderer.entities.setScale(ratio);
    renderer.ui.setScale(ratio);
    renderer.renderer.resize(canvasWidth, canvasHeight);
    renderer.viewport.width = renderer.renderer.width / renderer.scale + 2 * renderer.viewportPadding;
    renderer.viewport.height = renderer.renderer.height / renderer.scale + 2 * renderer.viewportPadding;
};
const onWindowResize = (e) => {
    if (window.zoomonscroll) {
        if (e.deltaY > 0) dimension += 0.02;
        else if (e.deltaY < 0) dimension -= 0.02;
    }
    upd();
} // Zoom by Apex, modified by eh
onWindowResize();
window.onresize = onWindowResize;
window.onwheel = e => {
    onWindowResize(e);
    // cycleWeapon(e);
}

window.zoom = val => {
    dimension = val;
    upd();
};

getElem('hud-top-right')[0].insertAdjacentHTML("beforeend", `
<div id="zsd">
    <a class="zsd-icons" style="z-index: 14;padding: 10px 0 0 0px;" onclick="window.zoomOut();">
        <i class="fa fa-arrow-up fa-2x" style="margin-top: 5px;border-bottom-left-radius: 4px;"></i>
    </a>
    <a class="zsd-icons" style="z-index: 14;padding: 16px 0 0 0;" onclick="window.resetZoom();">
        <i class="fa fa-undo fa-lg" style="margin-top: 5px;"></i>
    </a>
    <a class="zsd-icons" style="z-index: 14;padding: 10px 0 0 0px;border-bottom-right-radius: 4px;" onclick="window.zoomIn();">
        <i class="fa fa-arrow-down fa-2x" style="margin-top: 5px;"></i>
    </a>
</div>
`);

getElem('hud-center-left')[0].insertAdjacentHTML("beforebegin", `
<div class="refrsh">
    <button class="btn btn white" style="top: 95.9%;left: 180px;position: absolute;z-index: 14;width: 40px;opacity: 0.8;padding: 1px 10px 10px 10px;" onclick="window.toggleZoS();">
        <i class="fa fa-refresh"></i>
    </button>
</div>
`);
/*
let refrsh = document.createElement('div');
refrsh.classList.add('refrsh');
refrsh.classList.add("hud-toolbar-item");
refrsh.innerHTML = `
<button class="btn btn white" style="position: absolute;z-index: 14;opacity: 0.8;padding: 1px 10px 10px 10px;" onclick="window.toggleZoS();">
    <i class="fa fa-refresh"></i>
</button>
`;
document.getElementsByClassName('hud-toolbar-inventory')[0].appendChild(refrsh);
*/
window.toggleZoS = () => {
    dimension -= 0.02;
    window.zoomonscroll = !window.zoomonscroll;
    let zs = getId("zsd");
    zs.style.display = zs.style.display == "none" ? "flex" : "none";
};

window.zoomOut = () => {
    dimension += 1;
    window.zoom(dimension);
};
window.zoomIn = () => {
    dimension -= 1;
    window.zoom(dimension);
};
window.resetZoom = () => {
    dimension = 1;
    window.zoom(dimension);
};

/* snap
const items = document.getElementsByClassName('snapItem');
const itemHeight = items[0].getBoundingClientRect().height;
let currentTopIndex = 0;
let prevY = 0;

document.getElementsByClassName('hud-zipp-grid3')[0].onscroll = function() {
  let currY = window.pageYOffset;

  // Scrolling down
  if (currY > prevY &&
      currentTopIndex < items.length - 1 &&
      items[currentTopIndex + 1].getBoundingClientRect().top < itemHeight) {
    items[currentTopIndex].classList.remove('topItem');
    items[currentTopIndex].style.top = 'auto';
    items[currentTopIndex].style.bottom = 0;
    currentTopIndex ++;
    items[currentTopIndex].classList.add('topItem');
  }

  // Scrolling up
  else if (currY < prevY &&
           currentTopIndex > 0 &&
           items[currentTopIndex - 1].getBoundingClientRect().top > 0) {
      items[currentTopIndex].classList.remove('topItem');
      currentTopIndex --;
      items[currentTopIndex].classList.add('topItem');
      items[currentTopIndex].style.top = 0;
      items[currentTopIndex].style.bottom = 'auto';
  }

  prevY = currY;
};

*/



















// actual code starts here
const options = {
    AHRC: false,
    wallBlock: false,
    rebuild: false,
    autoUpgrade: false,
    autoBow: false,
    autoAim: false,
    accept: false,
    kick: false,
    spamJoin: false,
    spamChat: false,
    heal: true,
    revive: true,
    clearMsgs: false,
    recordMacro: false,
    macro: false,
    stopMacro: false,
    moving: false,

    // socket options
    autofill: false,
    automove: false,
    aito: false,
    finder: false,
    antiAttack: false,
    randomParty: false,
    rwp: false,
    ar: false,
    global: {
        closestAlt: undefined,
    }
}

let getRss = false;
let allowed1 = true;

const petTokens = [100, 100, 100, 100, 200, 200, 300, Infinity];
const spearCostArray = [1400, 4200, 9800, 21000, 43500, 88500, 178500, Infinity];

let checkedHarvesters = new Set();
let workingHarvesters = new Set();

// auto rb + auto upgrade + ahrc
let goldStash;

let buildings = {};
let savedBase = {};
let toBeReplaced = {};

let toBeUpgraded = {};
let autoUpgradeList = {};

let availableHarvesters = {};

// ws indentifiers
let altname = 1;

function findNearestAltToStash() {
    if (window.allSockets.length < 1) return false;

    let altArray = [];
    let targetGoldStash = Object.values(Game.currentGame.world.entities).find(building => building.fromTick.model == "GoldStash");

    if (!targetGoldStash) return false;
    if (targetGoldStash.targetTick.partyId == game.ui.playerPartyId) return false;

    for (let ws of window.allSockets) {
        if (ws.isclosed || !ws.myPlayer) continue;
        if (!ws.myPlayer.dead) altArray.push(ws.myPlayer);
    }
    if (altArray.length < 1) return false;

    altArray.sort((a, b) => {
        return measureDistance(targetGoldStash.fromTick.position, a.position) - measureDistance(targetGoldStash.fromTick.position, b.position);
    });

    return altArray[0].uid;
};
window.findNearestAlt = findNearestAltToStash;

function randomCharacterGenerator(textLength = 29) {
    let availableCharacters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890~!@#$%^&*()_+`-=[]{};':,./<>?\|";
    let randomtext = "";
    for (let i = 0; i < textLength; i++) randomtext += availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    return randomtext;
}

function garbageGenerator(garbageLength = 25) {
    let garbageCharacters = "Ʊلِفبَاءتَاءثَاءجِيمحَاءخَاءدَالذَالرَاءزَايسِينشِينصَادضَادطَاءظَاءعَيْنغَيْنفَاءقَافكَافلاَممِيمنُونهَاءوَاويَاءهَمْزةأَلِف هَمْزةوَاو هَمْزةيَاء هَمْزةأَلِف مَدَّة	تاء مربوطةالف مقصورةƾƴȶȵȴƿȹΨϥϠȿωώϼЖЉζƻϪπϡԀԁԂԃԄԅԆԇԈԉԊԋԌԍԎԏԐԑԒԓԔԕԖԗԘԙԚԛԜԝԞԟԠԡԢԣԤԥԦԧԨԩԪԫԬԭԮԯϏη";
    let garbage = "";
    for (let i = 0; i < garbageLength; i++) garbage += garbageCharacters[Math.floor(Math.random() * garbageCharacters.length)];
    return garbage;
}

/*
let angleTo = (xFrom, yFrom, xTo, yTo) => {
    let dx = xTo - xFrom;
    let dy = yTo - yFrom;
    let yaw = Math.atan2(dy, dx) * 180.0 / Math.PI;
    let nonZeroYaw = yaw + 180.0;
    let reversedYaw = nonZeroYaw;
    let shiftedYaw = (360.0 + reversedYaw - 90.0) % 360.0;
    return shiftedYaw;
};

let screenToYaw = function (x, y) {
    let angle = Math.round(angleTo(game.renderer.getWidth() / 2, game.renderer.getHeight() / 2, x, y));
    return angle % 360;
};
*/

const measureDistance = (obj1, obj2) => {
    if (!(obj1.x && obj1.y && obj2.x && obj2.y)) return Infinity;
    let xDif = obj2.x - obj1.x;
    let yDif = obj2.y - obj1.y;
    return Math.abs((xDif**2) + (yDif**2));
};

const isPointInCircle = (circle, point, radius) => {
    if (Math.pow((point.x - circle.x), 2) +
        Math.pow((point.y - circle.y), 2) <= Math.pow(radius, 2)) return true;
    return false;
}

function msToTime(s) {

    // Pad to 2 or 3 digits, default is 2
    function pad(n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    }

    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

    return pad(hrs) + ':' + pad(mins) + ':' + pad(secs) + '.' + pad(ms, 3);
}

function copyText(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

const canAfford = (resources, costs, tier) => {
    const { gold, wood, stone } = resources;
    const goldCosts = costs.goldCosts[tier - 1];
    const stoneCosts = costs.stoneCosts[tier - 1];
    const woodCosts = costs.woodCosts[tier - 1];
    return !(gold < goldCosts || wood < woodCosts || stone < stoneCosts);
}

const ticker = {
    tickData: {},
    dayTicker: 0,
    getDayTick() {
        return this.dayTicker;
    }
}

Game.currentGame.network.addEntityUpdateHandler((eventData) => {
    var currentTick = eventData.tick;
    var msPerTick = 50;
    var dayRatio = 0;
    var nightRatio = 0;
    var barWidth = 130;
    if (ticker.tickData) {
        if (ticker.tickData.dayEndTick) {
            if (ticker.tickData.dayEndTick > 0) {
                var dayLength = ticker.tickData.dayEndTick - ticker.tickData.cycleStartTick;
                var dayTicksRemaining = ticker.tickData.dayEndTick - currentTick;
                dayRatio = 1 - dayTicksRemaining / dayLength;
            }
        }
        else if (ticker.tickData.nightEndTick > 0) {
            var nightLength = ticker.tickData.nightEndTick - ticker.tickData.cycleStartTick;
            var nightTicksRemaining = ticker.tickData.nightEndTick - currentTick;
            dayRatio = 1;
            nightRatio = 1 - nightTicksRemaining / nightLength;
        }
        var currentPosition = (dayRatio * 1 / 2 + nightRatio * 1 / 2) * -barWidth;
        var offsetPosition = currentPosition + barWidth / 2;
        if (offsetPosition) ticker.dayTicker = Math.round(offsetPosition);
    }
    if (options.rebuild && goldStash) {
        for (let i in toBeReplaced) {
            for (let x in toBeReplaced[i]) {
                for (let y in toBeReplaced[i][x]) {
                    Game.currentGame.network.sendRpc({
                        name: "MakeBuilding",
                        type: i,
                        x: parseInt(x),
                        y: parseInt(y),
                        yaw: 0
                    });
                }
            }
        }

        for (let uid in toBeUpgraded) {
            Game.currentGame.network.sendRpc({
                name: "UpgradeBuilding",
                uid: parseInt(uid)
            });
        }
    }

    if (options.autoUpgrade && goldStash) {
        let resourcesClone = {
            wood: game.ui.playerTick.wood,
            stone: game.ui.playerTick.stone,
            gold: game.ui.playerTick.gold
        }

        for (let i in autoUpgradeList) {
            const building = game.ui.buildings[i];
            if (building.type !== "GoldStash" && building.tier >= goldStash.tier) continue;

            const costs = game.ui.buildingSchema[building.type];
            if (canAfford(resourcesClone, costs, building.tier + 1)) {
                resourcesClone.wood -= costs.woodCosts[building.tier];
                resourcesClone.stone -= costs.stoneCosts[building.tier];
                resourcesClone.gold -= costs.goldCosts[building.tier];

                game.network.sendRpc({
                    name: "UpgradeBuilding",
                    uid: parseInt(i)
                });
            }
        }
    }
    if (game.world.inWorld) {
        if (options.AHRC) {
            for (let uid in game.world.entities) {
                const entity = game.world.entities[uid];
                if (entity.targetTick.model == "Harvester" && entity.targetTick.partyId == game.ui.playerPartyId && game.ui.playerTick.gold > 0.69) {
                    if (checkedHarvesters.has(uid)) {
                        if (entity.fromTick.stone !== entity.targetTick.stone || entity.fromTick.wood !== entity.targetTick.wood) {
                            workingHarvesters.add(uid);
                        };
                    } else {
                        checkedHarvesters.add(uid);
                        game.network.sendRpc({name: "AddDepositToHarvester", uid: parseInt(uid), deposit: 0.69});
                    };
                };
                if (workingHarvesters.has(uid)) {
                    let amount = entity.fromTick.tier * 0.05 - 0.02;
                    game.network.sendRpc({name: "AddDepositToHarvester", uid: parseInt(uid), deposit: amount});
                    game.network.sendRpc({name: "CollectHarvester", uid: parseInt(uid)});
                };
            };
        }
        if (options.autoBow) {
            game.network.sendInput({space: 0})
            game.network.sendInput({space: 1})
        }
        if (options.kick) {
            /* may change in the future with kick exceptions
            for (let i in Game.currentGame.ui.playerPartyMembers) {
                Game.currentGame.network.sendRpc({
                    name: "KickParty",
                    uid: Game.currentGame.ui.playerPartyMembers[i].playerUid
                })
            }
            */
            if (!window.kick) {
                window.kick = true;
                if (game.ui.playerPartyMembers.length > 1) {
                    Game.currentGame.network.sendRpc({name: "KickParty", uid: Game.currentGame.ui.playerPartyMembers[1].playerUid});
                };
                setTimeout(() => { window.kick = false; }, 1500);
            }
        }
        if (options.clearMsgs) {
            for (let i = 0; i < getElem('hud-chat-message').length; i++) getElem('hud-chat-message')[0].remove();
        }
        if (options.spamChat && getId('4i2').value) {
            game.network.sendRpc({name: "SendChatMessage", channel: "Local", message: `${garbageGenerator()}  ${getId('4i2').value}  ${garbageGenerator()}`});
        }
        if (options.spamJoin) {
            game.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: getId('6i2').value + ""});
        }
        if (options.autoAim) {
            window.targets = [];
            let entities = game.renderer.npcs.attachments;

            for (let i in entities) {
                if (getId('aimOptions').value == 'pl' ?
                    (entities[i].fromTick.model == "GamePlayer" && entities[i].fromTick.uid !== game.ui.playerTick.uid && entities[i].targetTick.partyId !== game.ui.playerPartyId && entities[i].fromTick.dead == 0) :
                    getId('aimOptions').value == 'zo' ? (entities[i].fromTick.model !== "GamePlayer" && entities[i].entityClass !== "Projectile" && entities[i].fromTick.model !== "NeutralTier1") :
                    entities[i].fromTick.uid !== game.ui.playerTick.uid) {
                    window.targets.push(entities[i].fromTick);
                };
            };
            if (window.allSockets.length) {
                for (let i of window.allSockets) {
                    let alt = window.targets.find(e => e.uid == i.uid);
                    if (!!alt) window.targets.splice(window.targets.indexOf(alt), 1);
                }
            }
            if (window.targets.length > 0) {
                const myPos = game.ui.playerTick.position;
                window.targets.sort((a, b) => {
                    return measureDistance(myPos, a.position) - measureDistance(myPos, b.position);
                });

                const target = window.targets[0];
                let reversedAim = game.inputPacketCreator.screenToYaw((target.position.x - myPos.x) * 100, (target.position.y - myPos.y) * 100);
                game.inputPacketCreator.lastAnyYaw = reversedAim;
                game.network.sendPacket(3, {mouseMoved: reversedAim});
            }
        };
    }

    if (getRss) !allowed1 && (allowed1 = true);
    if (getRss || allowed1) {
        for (let i in game.renderer.npcs.attachments) {
            if (game.renderer.npcs.attachments[i].fromTick.name) {
                let player = game.renderer.npcs.attachments[i];
                let wood_1 = counter(player.targetTick.wood);
                let stone_1 = counter(player.targetTick.stone);
                let gold_1 = counter(player.targetTick.gold);
                let token_1 = counter(player.targetTick.token);
                let px_1 = counter(player.targetTick.position.x);
                let py_1 = counter(player.targetTick.position.y);
                let timeout_1 = "";
                if (getRss && !player.targetTick.oldName) {
                    player.targetTick.oldName = player.targetTick.name;
                    player.targetTick.oldWood = wood_1;
                    player.targetTick.oldStone = stone_1;
                    player.targetTick.oldGold = gold_1;
                    player.targetTick.oldToken = token_1;
                    player.targetTick.oldPX = px_1;
                    player.targetTick.oldPY = py_1;
                    player.targetTick.info = `
  ${player.targetTick.oldName}; score: ${player.targetTick.score.toLocaleString()}
  UID: ${player.targetTick.uid}
  W: ${wood_1}, S: ${stone_1}, G: ${gold_1}, T: ${token_1}
  x: ${Math.round(player.targetTick.position.x)}, y: ${Math.round(player.targetTick.position.y)}
  partyId: ${Math.round(player.targetTick.partyId)}
  timeDead: ${msToTime(player.targetTick.timeDead)}
                    ${player.targetTick.isPaused ? "On Timeout" : ""}





`;
                    player.targetTick.name = game.renderer.npcs.attachments[i].targetTick.info;
                }
                if (!getRss && player.targetTick.oldName) {
                    player.targetTick.info = player.targetTick.oldName;
                    player.targetTick.name = game.renderer.npcs.attachments[i].targetTick.info;
                    player.targetTick.oldName = null;
                }
                if (getRss) {
                    if (player.targetTick.oldGold !== gold_1 || player.targetTick.oldWood !== wood_1 || player.targetTick.oldStone !== stone_1 || player.targetTick.oldToken !== token_1 || player.targetTick.oldPX !== px_1 || player.targetTick.oldPY !== py_1) {
                        player.targetTick.oldWood = wood_1;
                        player.targetTick.oldStone = stone_1;
                        player.targetTick.oldGold = gold_1;
                        player.targetTick.oldToken = token_1;
                        player.targetTick.oldPX = px_1;
                        player.targetTick.oldPY = py_1;
                        player.targetTick.info = `
  ${player.targetTick.oldName}; score: ${player.targetTick.score.toLocaleString()}
  UID: ${player.targetTick.uid}
  W: ${wood_1}, S: ${stone_1}, G: ${gold_1}, T: ${token_1}
  x: ${Math.round(player.targetTick.position.x)}, y: ${Math.round(player.targetTick.position.y)}
  partyId: ${Math.round(player.targetTick.partyId)}
  timeDead: ${msToTime(player.targetTick.timeDead)}
                    ${player.targetTick.isPaused ? "On Timeout" : ""}





`;
                        player.targetTick.name = game.renderer.npcs.attachments[i].targetTick.info;
                    }
                }
            }
        }
    }
    if (!getRss) allowed1 = false;
})

document.addEventListener("keydown", e => {
    if(document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
        if (e.key == '-') {
            getRss = !getRss;
        }
    }
})

Game.currentGame.ui._events.playerPetTickUpdate.push(pet => {
    if (options.revive && pet.health <= 0) {
        Game.currentGame.network.sendRpc({
            name: "BuyItem",
            itemName: "PetRevive",
            tier: 1
        });
        Game.currentGame.network.sendRpc({
            name: "EquipItem",
            itemName: "PetRevive",
            tier: 1
        });
    }
    if (options.heal) {
        let petHealth = (pet.health / pet.maxHealth) * 100;
        if (petHealth <= 50) {
            game.network.sendRpc({
                name: "BuyItem",
                itemName: "PetHealthPotion",
                tier: 1
            });
            game.network.sendRpc({
                name: "EquipItem",
                itemName: "PetHealthPotion",
                tier: 1
            })
        }
    };
    if (window.tokenHeal && pet.health < pet.maxHealth && game.ui.playerTick.token >= petTokens[pet.tier - 1]) {
        game.network.sendRpc({
            name: "BuyItem",
            itemName: pet.model,
            tier: pet.tier + 1
        });
    };
    if ([8, 16, 24, 32, 48, 64, 96].indexOf(game.ui.components.MenuShop.shopItems[pet.model == 'PetCARL' ? 'PetCARL' : 'PetMiner'].level) >= 0 && game.ui.playerTick.token >= petTokens[pet.tier - 1]) {
        game.network.sendRpc({
            name: "BuyItem",
            itemName: pet.model,
            tier: pet.tier + 1
        });
    }
});

game.ui._events.playerTickUpdate.push(player => {
    if (options.heal && (player.health / player.maxHealth) * 100 <= 50) healPlayer();
});

game.network.addRpcHandler("PartyApplicant", e => {
    if (options.accept) {
        game.network.sendRpc({name: "PartyApplicantDecide", applicantUid: e.applicantUid, accepted: 1});
    };
});

Game.currentGame.network.addRpcHandler("Leaderboard", () => { options.global.closestAlt = findNearestAltToStash() });

game.network.addRpcHandler("Dead", (e) => {
    window.deadPos = game.ui.playerTick.position;
    // if (e.stashDied) fakeMessage({name: 'System', time: getClock(), message: 'Your stash died.'});
    /* when you are dead, fromtick will return:
     * old score,
     * old wave,
     */
});

/* function sellAllByType(type) {
    if (!game.ui.playerPartyCanSell) return;

    let allBuildings = [];
    for (let i in game.ui.buildings) {
        if (game.ui.buildings[i].type == type) allBuildings.push(i);
    }
    let sellInterval = (value) => {
        let _value = value;
        if (window.sellBreak || value == allBuildings.length) {
            console.trace(); console.log('break at this line', allBuildings);
            return;
        }
        let target = allBuildings[value];
        if (target !== undefined && !game.ui.buildings[target].dead) {
            Game.currentGame.network.sendRpc({name: "DeleteBuilding", uid: parseInt(target)});
            setTimeout(() => { sellInterval(_value + 1); }, 100);
        }
    }
    sellInterval(0);
}; */

function sellAllByType(type) {
    if (!game.ui.playerPartyCanSell) return;

    let sellInterval = () => {
        if (window.sellBreak) return;
        let target = Object.values(game.ui.buildings).find(e => e.type == type);
        if (target !== undefined) {
            Game.currentGame.network.sendRpc({name: "DeleteBuilding", uid: target.uid});
            setTimeout(() => { sellInterval(); }, 100);
        }
    }
    sellInterval();
};

const addFunctionToElem = (id, option, buttonText, colors = 'btn-red?btn-green', onCallback, offCallback) => {
    getId(id).addEventListener('click', e => {
        let toggleColor = colors.split('?');
        if (options[option] === false) {
            options[option] = true;
            e.target.classList.remove(toggleColor[1]);
            e.target.classList.add(toggleColor[0]);
            e.target.innerText = `Disable ${buttonText}`;
            onCallback?.();
        } else {
            options[option] = false;
            e.target.classList.remove(toggleColor[0]);
            e.target.classList.add(toggleColor[1]);
            e.target.innerText = `Enable ${buttonText}`;
            offCallback?.();
        }
    });
}

getId("0i").addEventListener('click', function() {
    Game.currentGame.ui.getComponent("PopupOverlay").showConfirmation("Are you sure you want to delete all towers?", 1e4, function() {
        let sellInterval = () => {
            if (window.sellBreak) return;
            if (Object.keys(game.ui.buildings).length > 1 && game.ui.playerPartyCanSell) {
                Game.currentGame.network.sendRpc({name: "DeleteBuilding", uid: parseInt(Object.keys(game.ui.buildings)[1])});
                setTimeout(() => { sellInterval(); }, 100);
            }
        }
        sellInterval();
    })
})

getId("1i").addEventListener('click', () => { sellAllByType("Wall") });
getId("2i").addEventListener('click', () => { sellAllByType("Door") });
getId("3i").addEventListener('click', () => { sellAllByType("SlowTrap") });
getId("4i").addEventListener('click', () => { sellAllByType("ArrowTower") });
getId("5i").addEventListener('click', () => { sellAllByType("CannonTower") });
getId("6i").addEventListener('click', () => { sellAllByType("MeleeTower") });
getId("7i").addEventListener('click', () => { sellAllByType("BombTower") });
getId("8i").addEventListener('click', () => { sellAllByType("MagicTower") });
getId("9i").addEventListener('click', () => { sellAllByType("GoldMine") });
getId("10i").addEventListener('click', () => { sellAllByType("Harvester") });
getId("11i").addEventListener('click', () => { Game.currentGame.network.sendRpc({name: "DeleteBuilding", uid: game.ui.getPlayerPetUid()}); });

addFunctionToElem('15i', 'AHRC', 'AHRC', 'btn-red?btn-blue');
addFunctionToElem('0i2', 'heal', 'Auto Heal');
addFunctionToElem('1i2', 'revive', 'Auto Revive');
addFunctionToElem('2i2', 'autoAim', 'AutoAim', 'btn-red?btn-blue');
addFunctionToElem('3i2', 'spamChat', 'Chat Spam', 'btn-red?btn-blue');
addFunctionToElem('5i2', 'spamJoin', 'Auto Join', 'btn-red?btn-blue');
addFunctionToElem('7i2', 'moving', 'Navigator', 'btn-red?btn-blue',
                  () => getId('moveOptions').value == 'nn' ? window.goToPos(getId('8i2').value, getId('9i2').value) : getId('moveOptions').value == 'ld' ? window.goToPos(window.deadPos.x, window.deadPos.y) : window.goToPos(window.playerX, window.playerY),
                  () => { options.moving = false; });
addFunctionToElem('10i2', 'recordMacro', 'Recorder', 'btn-red?btn-green', () => { window.macroActions.created = Date.now(); });
addFunctionToElem('12i2', 'macro', 'Macro', 'btn-red?btn-blue', () => { window.macro(); }, () => { options.stopMacro = true; });
addFunctionToElem('2i3', 'accept', 'Auto Accept', 'btn-red?btn-blue');
addFunctionToElem('3i3', 'kick', 'Auto Kick', 'btn-red?btn-blue');
addFunctionToElem('4i3', 'clearMsgs', 'Auto Clear', 'btn-red?btn-blue');

addFunctionToElem('sendFinder', 'finder', 'Find Player', 'btn-red?btn-purple', () => { window.playerFinder(); });
addFunctionToElem('sendAITO', 'aito', 'AITO', 'btn-red?btn-purple', () => window.sendAitoAlt() /* , () => { options.aito = false; } */);
addFunctionToElem('automove', 'automove', 'Automove', 'btn-red?btn-purple', () => {
    for (let ws of window.allSockets) ws.automove = true;
}, () => {
    for (let ws of window.allSockets) {
        ws.automove = false;
        ws.network.sendInput({up: 0, down: 0, left: 0, right: 0});
    }
});
addFunctionToElem('changeparty', 'randomParty', 'Join Random Party');
addFunctionToElem('anticarl', 'antiAttack', 'Immunity', 'btn-red?btn-purple');
addFunctionToElem('resar', 'ar', 'Auto Respawn', 'btn-red?btn-purple');
addFunctionToElem('reswp', 'rwp', 'Mutual Respawn', 'btn-red?btn-purple');

document.querySelector("#autoMoveOptions").addEventListener('change', () => {
    for (let ws of window.allSockets) ws.moveOption = document.querySelector("#autoMoveOptions").value;
})

getId("5i3").addEventListener('click', function() {
    Game.currentGame.ui.getComponent("PopupOverlay").showConfirmation("Are you sure you want to delete all map markers?", 1e4, function() {
        while (document.getElementsByClassName('map-display').length > 0) {
             document.getElementsByClassName('map-display')[0].remove();
        }
    })
})

getId("deleteAlt").addEventListener('click', function() {
    let id = Math.floor(getId("deletealtplaceholder").value);
    window.allSockets[id-1].close();
})

/* document.getElementsByClassName("emm")[0].addEventListener('click', function() {
    window.mousemove = !window.mousemove;
    this.innerText = window.mousemove ? "Disable MouseMove" : "Enable MouseMove"
    this.className = window.mousemove ? "btn btn-red emm" : "btn btn-purple emm"
})
document.getElementsByClassName("epf")[0].addEventListener('click', function() {
    window.altFollowPlayer = !window.altFollowPlayer;
    this.innerText = window.altFollowPlayer ? "Disable Player Follower" : "Enable Player Follower"
    this.className = window.altFollowPlayer ? "btn btn-red epf" : "btn btn-purple epf"
})
document.getElementsByClassName("ecp")[0].addEventListener('click', function() {
    window.mouseclick = !window.mouseclick;
    this.innerText = window.mouseclick ? "Disable Click Position" : "Enable Click Position"
    this.className = window.mouseclick ? "btn btn-red ecp" : "btn btn-purple ecp"
}) */
document.getElementsByClassName("tier2spear")[0].addEventListener('click', function() {
    window.Join4Tier2Spear = !window.Join4Tier2Spear;
    this.innerText = window.Join4Tier2Spear ? "Disable Auto Buy Spear?" : "Enable Auto Buy Spear?"
    this.className = window.Join4Tier2Spear ? "btn btn-red tier2spear" : "btn btn-purple tier2pear"
})
document.getElementsByClassName("tglpt")[0].addEventListener('click', function() {
    window.shouldStartScript = !window.shouldStartScript;
    this.innerText = window.shouldStartScript ? "Disable Player Trick?" : "Enable Player Trick?"
    this.className = window.shouldStartScript ? "btn btn-red tglpt" : "btn btn-purple tglpt"
})
document.getElementsByClassName("tglraid")[0].addEventListener('click', function() {
    window.autoRaid = !window.autoRaid;
    this.className = window.autoRaid ? "btn btn-red tglraid" : "btn btn-purple tglraid"
})

document.getElementById("6i3").addEventListener('click', function() {
    window.ground();
    this.className = "border-white";
    if (window.groundtoggle) {
        this.className = "border-red";
    }
})
document.getElementById("7i3").addEventListener('click', function() {
    window.npc();
    this.className = "border-white";
    if (window.npctoggle) {
        this.className = "border-red";
    }
})
document.getElementById("8i3").addEventListener('click', function() {
    window.env();
    this.className = "border-white";
    if (window.envtoggle) {
        this.className = "border-red";
    }
})
document.getElementById("9i3").addEventListener('click', function() {
    window.pjt();
    this.className = "border-white";
    if (window.pjttoggle) {
        this.className = "border-red";
    }
})
document.getElementById("10i3").addEventListener('click', function() {
    window.everything();
    this.className = "border-white";
    if (window.everythingtoggle) {
        this.className = "border-red";
    }
})
document.getElementById("11i3").addEventListener('click', function() {
    window.rndr();
    this.className = "border-white";
    if (window.rndrtoggle) {
        this.className = "border-red";
    }
})

window.ground = () => {
    window.groundtoggle = !window.groundtoggle;
    if (window.groundtoggle) {
        game.renderer.ground.setVisible(false)
    } else {
        game.renderer.ground.setVisible(true)
    }
}
window.npc = () => {
    window.npctoggle = !window.npctoggle;
    if (window.npctoggle) {
        game.renderer.npcs.setVisible(false)
    } else {
        game.renderer.npcs.setVisible(true)
    }
}
window.env = () => {
    window.envtoggle = !window.envtoggle;
    if (window.envtoggle) {
        game.renderer.scenery.setVisible(false)
    } else {
        game.renderer.scenery.setVisible(true)
    }
}
window.pjt = () => {
    window.pjttoggle = !window.pjttoggle;
    if (window.pjttoggle) {
        game.renderer.projectiles.setVisible(false)
    } else {
        game.renderer.projectiles.setVisible(true)
    }
}
window.everything = () => {
    window.everythingtoggle = !window.everythingtoggle;
    if (window.everythingtoggle) {
        game.renderer.scene.setVisible(false)
    } else {
        game.renderer.scene.setVisible(true)
    }
}
window.rndr = () => {
    window.rndrtoggle = !window.rndrtoggle;
    if (window.rndrtoggle) {
        game.stop();
    } else {
        game.start();
    }
}

function counter(e = 0) {
    if (e <= -0.99949999999999999e24) {
        return Math.round(e/-1e23)/-10 + "TT";
    }
    if (e <= -0.99949999999999999e21) {
        return Math.round(e/-1e20)/-10 + "TB";
    }
    if (e <= -0.99949999999999999e18) {
        return Math.round(e/-1e17)/-10 + "TM";
    }
    if (e <= -0.99949999999999999e15) {
        return Math.round(e/-1e14)/-10 + "TK";
    }
    if (e <= -0.99949999999999999e12) {
        return Math.round(e/-1e11)/-10 + "T";
    }
    if (e <= -0.99949999999999999e9) {
        return Math.round(e/-1e8)/-10 + "B";
    }
    if (e <= -0.99949999999999999e6) {
        return Math.round(e/-1e5)/-10 + "M";
    }
    if (e <= -0.99949999999999999e3) {
        return Math.round(e/-1e2)/-10 + "K";
    }
    if (e <= 0.99949999999999999e3) {
        return Math.round(e) + "";
    }
    if (e <= 0.99949999999999999e6) {
        return Math.round(e/1e2)/10 + "K";
    }
    if (e <= 0.99949999999999999e9) {
        return Math.round(e/1e5)/10 + "M";
    }
    if (e <= 0.99949999999999999e12) {
        return Math.round(e/1e8)/10 + "B";
    }
    if (e <= 0.99949999999999999e15) {
        return Math.round(e/1e11)/10 + "T";
    }
    if (e <= 0.99949999999999999e18) {
        return Math.round(e/1e14)/10 + "TK";
    }
    if (e <= 0.99949999999999999e21) {
        return Math.round(e/1e17)/10 + "TM";
    }
    if (e <= 0.99949999999999999e24) {
        return Math.round(e/1e20)/10 + "TB";
    }
    if (e <= 0.99949999999999999e27) {
        return Math.round(e/1e+23)/10 + "TT";
    }
    if (e >= 0.99949999999999999e27) {
        return Math.round(e/1e+23)/10 + "TT";
    }
}

function healPlayer() {
    Game.currentGame.network.sendRpc({"name": "EquipItem", "itemName": "HealthPotion", "tier": 1})
    Game.currentGame.network.sendRpc({"name": "BuyItem", "itemName": "HealthPotion", "tier": 1})
}

var towerCodes = ["Wall", "Door", "SlowTrap", "ArrowTower", "CannonTower", "MeleeTower", "BombTower", "MagicTower", "GoldMine", "Harvester"];

function BuildBase(design) {
    if (typeof design !== "string") throw new Error("Argument must be given as a string.");
    if (goldStash === undefined) throw new Error("You must have a gold stash to be able to use this.");

    const towers = design.split(";");

    for (let towerStr of towers) {
        const tower = towerStr.split(",");

        if (tower[0] === "") continue;
        if (tower.length < 4) throw new Error(`${JSON.stringify(tower)} contains an issue that must be fixed before this design can be replicated.`);

        Game.currentGame.network.sendRpc({
            name: "MakeBuilding",
            type: towerCodes[parseInt(tower[0])],
            x: goldStash.x - parseInt(tower[1]),
            y: goldStash.y - parseInt(tower[2]),
            yaw: parseInt(tower[3])
        });
    };
};

window.RecordBase = (storage) => {
    let baseStr = "";
    for (let i in game.ui.buildings) {
        const building = game.ui.buildings[i];
        if (towerCodes.indexOf(building.type) < 0) continue;

        let yaw = 0;

        if (["Harvester", "MeleeTower"].includes(building.type)) {
            if (game.world.entities[building.uid] !== undefined) yaw = game.world.entities[building.uid].targetTick.yaw;
        }
        baseStr += `${towerCodes.indexOf(building.type)},${goldStash.x - building.x},${goldStash.y - building.y},${yaw};`;
    }
    if (storage !== undefined) localStorage[storage] = baseStr;
    getId('design').value = baseStr;
    console.log(baseStr);
}

window.buildRecordedBase = (base) => {
    BuildBase(localStorage[base]);
}

window.DeleteRecordedBase = (base) => {
    Game.currentGame.ui.getComponent("PopupOverlay").showConfirmation("Are you sure you want to delete recorded base?", 1e4, function() {
        game.ui.components.PopupOverlay.showHint("Successfully recorded base has been deleted!");
        localStorage[base] = null;
    })
}

function checkStatus(party) {
    return party.isOpen == 1 ? '<a style = "color: #00e700;opacity: 0.4;">[Open]<a/>' : '<a style = "color:red;opacity: 0.4;">[Private]<a/>';
};

let requestedParty;

(function() {
    getElem("hud-party-members")[0].style.display = "block";
    getElem("hud-party-grid")[0].style.display = "none";

    let privateTab2 = document.createElement("a");
    privateTab2.className = "hud-party-tabs-link";
    privateTab2.id = "privateTab2";
    privateTab2.innerHTML = "Closed Parties";

    let privateHud2 = document.createElement("div");
    privateHud2.className = "hud-private hud-party-grid";
    privateHud2.id = "privateHud2";
    privateHud2.style = "display: none;";
    getElem("hud-party-tabs")[0].appendChild(privateTab2);
    getElem("hud-menu hud-menu-party")[0].insertBefore(privateHud2, getElem("hud-party-actions")[0]);


    let privateTab = document.createElement("a");
    privateTab.className = "hud-party-tabs-link";
    privateTab.id = "privateTab";
    privateTab.innerHTML = "Party Tools";

    let privateHud = document.createElement("div");
    privateHud.className = "hud-private hud-party-grid";
    privateHud.id = "privateHud";
    privateHud.style = "display: none;";
    getElem("hud-party-tabs")[0].appendChild(privateTab);
    getElem("hud-menu hud-menu-party")[0].insertBefore(privateHud, getElem("hud-party-actions")[0]);


    getId("privateTab").onclick = e => {
        getId("privateHud2").style.display = "none";
        for (let i = 0; i < getElem("hud-party-tabs-link").length; i++) {
            getElem("hud-party-tabs-link")[i].className = "hud-party-tabs-link";
        }
        getId("privateTab").className = "hud-party-tabs-link is-active";
        getId("privateHud").setAttribute("style", "display: block;");
        if (getElem("hud-party-members")[0].getAttribute("style") == "display: block;") {
            getElem("hud-party-members")[0].setAttribute("style", "display: none;");
        }
        if (getElem("hud-party-grid")[0].getAttribute("style") == "display: block;") {
            getElem("hud-party-grid")[0].setAttribute("style", "display: none;");
        }
        if (getId("privateHud").getAttribute("style") == "display: none;") {
            getId("privateHud").setAttribute("style", "display: block;");
        }
    }

    getElem("hud-party-tabs-link")[0].onmouseup = e => {
        getId("privateHud").setAttribute("style", "display: none;");
        if (getId("privateTab").className == "hud-party-tabs-link is-active") {
            getId("privateTab").className = "hud-party-tabs-link"
        }
    }

    getElem("hud-party-tabs-link")[1].onmouseup = e => {
        getId("privateHud").setAttribute("style", "display: none;");
        if (getId("privateTab").className == "hud-party-tabs-link is-active") {
            getId("privateTab").className = "hud-party-tabs-link"
        }
    }

    game.network.addRpcHandler("SetPartyList", (partyList) => {
        getId("privateHud2").innerHTML = ``;
        for (let i in partyList) {
            let parties = partyList[i];
            let tab = document.createElement('div');
            tab.classList.add('hud-party-link');
            tab.classList.add('custom-party');
            tab.id = parties.partyId;
            tab.isPublic = parties.isOpen;
            tab.name = parties.partyName;
            tab.members = parties.memberCount;
            tab.innerHTML = `
                <strong>${parties.partyName}</strong>
                <small>id: ${parties.partyId}</small> <span>${parties.memberCount}/4</span>
            `;

            parties.memberCount == 4 ? tab.classList.add('is-disabled') : tab.style.display = 'block';

            setTimeout(() => { if (parties.partyId == game.ui.playerPartyId) tab.classList.add('is-active'); }, 500);

            if (parties.isOpen !== 1) getId("privateHud2").appendChild(tab);


/*             game.ui.components.MenuParty.partyElems[`${partyList[i].partyId}`].innerHTML = `
                <strong>${partyList[i].partyName}</strong>
                <small>id: ${partyList[i].partyId}</small> <span>${partyList[i].memberCount}/4</span>
            `; */

/*             for (let socket of window.allSockets) {
                if (socket?.myPlayer?.partyId == parties.partyId) {
                    tab.innerHTML = `
                        <strong>${parties.partyName} [Socket ${socket.cloneId}]</strong>
                        <small>id: ${parties.partyId}</small> <span>${parties.memberCount}/4</span>
                    `;
                    tab.addEventListener('click', () => game.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: socket.psk.response.partyShareKey}));
                }
            }
            if (parties.partyId == requestedParty && parties.isOpen !== 1 && game.ui.components.MenuParty.gridElem.classList.value.includes('is-disabled')) game.ui.components.MenuParty.onPartyApplicantInvalid(); */
        }
    });

    getId("privateTab2").onclick = e => {
        getId("privateHud").style.display = "none";
        for (let i = 0; i < getElem("hud-party-tabs-link").length; i++) {
            getElem("hud-party-tabs-link")[i].className = "hud-party-tabs-link";
        }
        getId("privateTab2").className = "hud-party-tabs-link is-active";
        getId("privateHud2").setAttribute("style", "display: block;");
        if (getElem("hud-party-members")[0].getAttribute("style") == "display: block;") {
            getElem("hud-party-members")[0].setAttribute("style", "display: none;");
        }
        if (getElem("hud-party-grid")[0].getAttribute("style") == "display: block;") {
            getElem("hud-party-grid")[0].setAttribute("style", "display: none;");
        }
        if (getId("privateHud2").getAttribute("style") == "display: none;") {
            getId("privateHud2").setAttribute("style", "display: block;");
        }
    }

    getElem("hud-party-tabs-link")[0].onmouseup = e => {
        getId("privateHud2").setAttribute("style", "display: none;");
        if (getId("privateTab2").className == "hud-party-tabs-link is-active") {
            getId("privateTab2").className = "hud-party-tabs-link"
        }
    }

    getElem("hud-party-tabs-link")[1].onmouseup = e => {
        getId("privateHud2").setAttribute("style", "display: none;");
        if (getId("privateTab2").className == "hud-party-tabs-link is-active") {
            getId("privateTab2").className = "hud-party-tabs-link"
        }
    }
    getId("privateHud").innerHTML = `
  <h1>Party Joiner</h1>
  <input id="psk" type="tel" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:243px;height:40px;margin: 0 5px 5px 0;" placeholder="Party share key..." value="" onclick="document.getElementById('joinpsk2').style.display = 'block';" class="btn" /><button class="btn btn-blue" onclick="game.network.sendRpc({ name: 'JoinPartyByShareKey', partyShareKey: document.getElementById('psk').value })">Join Party by Share Key (1)</button>
  <div id="joinpsk2" style="display: none;">
  <input id="psk2" type="tel" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:243px;height:40px;margin: 0 5px 5px 0;" placeholder="Party share key (2)..." value="" onclick="document.getElementById('joinpsk3').style.display = 'block';" class="btn" /><button class="btn btn-blue" onclick="game.network.sendRpc({ name: 'JoinPartyByShareKey', partyShareKey: document.getElementById('psk2').value })">Join Party by Share Key (2)</button>
  </div>
  <div id="joinpsk3" style="display: none;">
  <input id="psk3" type="tel" style="background-color:rgba(0,0,0,0);padding: 4px 5px; border-radius:8px;color:rgba(255,255,255,0.7); border:2px solid white;width:243px;height:40px;margin: 0 5px 5px 0;" placeholder="Party share key (3)..." value="" class="btn" /><button class="btn btn-blue" onclick="game.network.sendRpc({ name: 'JoinPartyByShareKey', partyShareKey: document.getElementById('psk3').value })">Join Party by Share Key (3)</button>
  </div>
  <br />
  <h1>Share Keys</h1>
  `;
    game.network.addRpcHandler("PartyShareKey", function(e) {
        let psk = e.partyShareKey;
        let lnk = `http://zombs.io/#/${game.options.serverId}/${psk}/`;
        getId("privateHud").innerHTML += `<div style="display:inline-block;margin-right:10px;"><p><strong style="cursor: pointer;" onclick="game.network.sendRpc({ name: 'JoinPartyByShareKey', partyShareKey: '${psk}' });">${psk}</strong> - <a href="${lnk}" target="_blank" color="purple">[Link]</a></p></div><br />`
    })
    // ^ share keys feature originally from 444x3, modified

    getElem('hud-party-tabs-link')[0].onclick = () => { getId("privateHud").style.display = "none"; getId("privateTab").classList.remove("is-active"); };
    getElem('hud-party-tabs-link')[1].onclick = () => { getId("privateHud").style.display = "none"; getId("privateTab").classList.remove("is-active"); };
})();

game.ui.components.MenuParty._update = game.ui.components.MenuParty.update;
game.ui.components.MenuParty.update = function() {
    game.ui.components.MenuParty._update();
    const partyList = game.ui.getParties();
    for (const i in partyList) {
        game.ui.components.MenuParty.partyElems[`${partyList[i].partyId}`].innerHTML = `
            <strong>${partyList[i].partyName}</strong>
            <small>id: ${partyList[i].partyId}</small> <span>${partyList[i].memberCount}/4</span>
        `;
    }
}

/* game.ui._onMouseUp = function (_0x434be1) {
    console.log('function fired');
    var buildingOverlay = this.components.BuildingOverlay,
        placementOverlay = this.components.PlacementOverlay,
        spellOverlay = this.components.SpellOverlay,
        menuShop = this.components.MenuShop,
        menuParty = this.components.MenuParty,
        menuSettings = this.components.MenuSettings;
    this.isMouseDown = !0x1;
    if (!(this.components.Intro.isVisible() || this.components.Reconnect.isVisible() || this.components.Respawn.isVisible())) {
        menuShop.hide();
        menuParty.hide();
        menuSettings.hide();
        if (spellOverlay.isActive()) {
            console.log('returned cast spell'); return void spellOverlay.castSpell();
        }
        if (!placementOverlay.isActive()) {
            var world = Game.currentGame.world,
                mousePosition = Game.currentGame.renderer.screenToWorld(this.mousePosition.x, this.mousePosition.y),
                mouseCell = world.entityGrid.getCellIndexes(mousePosition.x, mousePosition.y, {
                    'width': 0x1,
                    'height': 0x1
                }),
                isEntity = mouseCell.length > 0x0 && mouseCell[0x0];
            if (isEntity !== false) {
                var entities = world.entityGrid.getEntitiesInCell(isEntity);
                for (var entity in entities) {
                    var entityUid = parseInt(entity),
                        targetEntity = world.getEntityByUid(entityUid),
                        targetTick = targetEntity.getTargetTick();
                    if (buildingOverlay && entityUid == buildingOverlay.getBuildingUid()) {
                        console.log('returned case 1'); return void buildingOverlay.stopWatching();
                    }
                    for (var buldingType in this.buildingSchema) {
                        if (buldingType == targetTick.model) {
                            console.log('returned case 2');
                            buildingOverlay.stopWatching();
                            return void buildingOverlay.startWatching(entityUid);
                        }
                    }
                }
                buildingOverlay.stopWatching();
            }
        }
    }
}

game.ui.onMouseUp = function(bind) {};
game.inputManager.on('mouseUp', () => { console.log('event fired'); game.ui._onMouseUp.bind(game.ui)(); }); */

/* game.ui.components.MenuParty.update = function () {
    var _0x8a6f10 = this.ui.getParties(),
        _0x14590d = this.ui.getPlayerPartyLeader(),
        _0x45106d = _0x8a6f10[this.ui.getPlayerPartyId()],
        _0x5371f2 = this.ui.getPlayerPartyMembers(),
        _0x2bc229 = this.ui.getOption(`serverId`),
        _0x1152a3 = {},
        _0x4cca58 = 0x0;
    for (var _0x43658d in this.partyElems) _0x1152a3[_0x43658d] = !0x0;
    for (var _0x43658d in _0x8a6f10) {
        var _0x2b9ef5 = _0x8a6f10[_0x43658d],
            _0x24295e = this.partyElems[_0x43658d],
            _0x311827 = _0x2bb20c(_0x2f32aa(_0x2b9ef5.partyName, {
                'whiteList': []
            }));
        delete _0x1152a3[_0x43658d],
            this.partyElems[_0x43658d] || (_0x24295e = this.ui.createElement('<div\x20class=\x22hud-party-link\x22></div>'), this.gridElem.appendChild(_0x24295e), this.partyElems[_0x43658d] = _0x24295e, _0x24295e.addEventListener(`click`, this.onPartyJoinRequestHandler(_0x2b9ef5.partyId)[`bind`](this))),
            _0x2b9ef5.isOpen ? (_0x24295e.style.display = `block`, _0x4cca58++) : _0x24295e.style.display = `none`,
            this.ui.getPlayerPartyId() === _0x2b9ef5.partyId ? (_0x24295e.classList.add('is-active'), _0x24295e.classList.remove(`is-disabled`)) : _0x2b9ef5.memberCount === this.maxPartySize ? (_0x24295e.classList.remove(`is-active`), _0x24295e.classList.add(`is-disabled`)) : (_0x24295e.classList.remove('is-active'), _0x24295e.classList.remove('is-disabled')),
            _0x24295e.innerHTML = '<strong>' + _0x311827 + '</strong><span>' + _0x2b9ef5.memberCount + '/' + this.maxPartySize + `</span>`;
    }
    for (var _0x43658d in _0x1152a3) this.partyElems[_0x43658d] && (this.partyElems[_0x43658d][`remove`](), delete this.partyElems[_0x43658d]);
    for (var _0xfa0af5 in this.memberElems) this.memberElems[_0xfa0af5][`remove`](), delete this.memberElems[_0xfa0af5];
    for (var _0xfa0af5 in _0x5371f2) {
        var _0x2a0d7c = _0x2bb20c(_0x2f32aa(_0x5371f2[_0xfa0af5][`displayName`], {
            'whiteList': []
        })),
            _0x1e6caf = this.ui.createElement(`<div class="hud-member-link">
            <strong>` + _0x2a0d7c + `</strong>
            <small>` + (0x1 === _0x5371f2[_0xfa0af5][`isLeader`] ? `Leader` : `Member`) + `</small>
            <div class="hud-member-actions">
            <a class="hud-member-can-sell btn` + (_0x14590d && 0x1 !== _0x5371f2[_0xfa0af5]['isLeader'] ? '' : ` is-disabled`) + (0x1 === _0x5371f2[_0xfa0af5]['canSell'] ? ` is-active` : '') + `"><span class="hud-can-sell-tick"></span> Can sell buildings</a>
            <a class="hud-member-kick btn btn-red` + (_0x14590d && 0x1 !== _0x5371f2[_0xfa0af5][`isLeader`] ? '' : ` is-disabled`) + '\x22>Kick</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>');
        if (this.membersElem.appendChild(_0x1e6caf), this.memberElems[_0xfa0af5] = _0x1e6caf, _0x14590d && 0x0 === _0x5371f2[_0xfa0af5][`isLeader`]) {
            var _0x1b9965 = _0x1e6caf.querySelector(`.hud-member-kick`),
                _0x4916b0 = _0x1e6caf.querySelector(`.hud-member-can-sell`);
            _0x1b9965.addEventListener(`click`, this.onPartyMemberKick(_0xfa0af5)[`bind`](this)),
                _0x4916b0.addEventListener(`click`, this.onPartyMemberCanSellToggle(_0xfa0af5)[`bind`](this));
        }
    }
    return _0x4cca58 > 0x0 ? this.gridEmptyElem.style.display = `none` : this.gridEmptyElem.style.display = `block`,
        _0x45106d ? (document.activeElement !== this.tagInputElem && (this.tagInputElem.value = _0x45106d.partyName), _0x14590d ? this.tagInputElem.removeAttribute(`disabled`) : this.tagInputElem.setAttribute(`disabled`, 'true'), this.shareInputElem.removeAttribute('disabled'), this.shareInputElem.value = 'http://' + document.location.hostname + '/#/' + _0x2bc229 + '/' + this.ui.getPlayerPartyShareKey(), _0x14590d ? this.visibilityElem.classList.remove(`is-disabled`) : this.visibilityElem.classList.add(`is-disabled`), void(_0x45106d.isOpen ? (this.visibilityElem.classList.remove(`is-private`), this.visibilityElem.innerText = `Public`) : (this.visibilityElem.classList.add(`is-private`), this.visibilityElem.innerText = `Private`))) : (this.tagInputElem.setAttribute('disabled', `true`), this.tagInputElem.value = '', this.shareInputElem.setAttribute('disabled', 'true'), this.shareInputElem.value = '', void this.visibilityElem.classList.add(`is-disabled`));
} */

game.ui.components.MenuParty.onPartyApplicantInvalid = function (event) {
    this.gridElem.classList.remove('is-disabled');
    this.gridJoiningElem.style.display = 'none';
};

getElem("hud-party-actions")[0].insertAdjacentHTML("afterend", `
<div class="partydiv" style="text-align: center">
  <button class="btn btn-red" style="width: 275.5px;margin: 10px 0 0 3px;box-shadow: none;" onclick="Game.currentGame.network.sendRpc({name: 'LeaveParty'});">Leave</button>
</div>`);

Game.currentGame.network.addRpcHandler("SetPartyList", parties => {
    let serverPopulation = 0;

    for (let party of parties) {
        serverPopulation += party.memberCount;
    };

    document.getElementsByClassName("hud-party-server")[0].innerHTML = `${serverPopulation}/32<small id="serverRegion"></small>`;

    if (options.autofill) {
        if (serverPopulation < 32) window.sendWs();
    };
});
document.addEventListener("keydown", e => {
    if (document.getElementById('hud-menu-party').style.display == "block") {
        if (e.key == "Shift") {
            document.getElementsByClassName('hud-party-share')[0].style.color = "black";
            document.getElementById("serverRegion").innerText = `${game.network.connectionOptions.name}`;
        }
    }
})
document.addEventListener("keyup", e => {
    if (document.getElementById('hud-menu-party').style.display == "block") {
        if (e.key == "Shift") {
            document.getElementsByClassName('hud-party-share')[0].style.color = "#eee";
            document.getElementById("serverRegion").innerText = "";
        }
    }
})

let oldParty, oldPartyId;
/*
Game.currentGame.network.addRpcHandler("PartyInfo", memberList => {
    let currentParty = memberList;
    let currentPartyId = game.ui.getPlayerPartyId();

    if (currentParty.length > oldParty.length) {
        if (currentPartyId === oldPartyId) {
            game.ui.getComponent("Chat").ui.createElement(`
            <div class="hud-chat-message">
                <strong>System</strong>
                <small> - ${getClock()}</small>
                : A player joined your party.
            </div>
            `);
        }
    }
});
*/

function fakeMessage({name: name, message: message, time: time}) {
    let chatUi = game.ui.getComponent("Chat");
    let messageElem = chatUi.ui.createElement(`<div class=\"hud-chat-message\"><strong>${name ? name : "System"}</strong><small>${time ? " - " + time : ""}</small>: ${message}</div>`);
    chatUi.messagesElem.appendChild(messageElem);
    chatUi.messagesElem.scrollTop = chatUi.messagesElem.scrollHeight;
}

window.ssfi = async() => {
    let ssrs = document.getElementById("ssrs"),
        selected = getElem("hud-intro-server")[0].value,
        server = game.options.servers[selected],
        hostname = server.hostname,
        url = `ws://${hostname}:80/`,
        hasSentData = false,
        { wasm, iframeId } = await fetchWasm('scannerWasm');

    ssrs.innerHTML = `<i class="fa fa-refresh fa-spin"></i> <strong>Loading...</strong>`;
    game.network.connectionOptions = { hostname: hostname };
    game.network.connected = true;

    let ws = new WebSocket(url);
    ws.binaryType = "arraybuffer";
    ws.isclosed = false;
    const loadLbPacket = () => {
        for (let i = 0; i < 30; i++) ws.send(new Uint8Array([3, 17, 123, 34, 117, 112, 34, 58, 49, 44, 34, 100, 111, 119, 110, 34, 58, 48, 125]));
        ws.send(new Uint8Array([7, 0]));
        ws.send(new Uint8Array([9,6,0,0,0,126,8,0,0,108,27,0,0,146,23,0,0,82,23,0,0,8,91,11,0,8,91,11,0,0,0,0,0,32,78,0,0,76,79,0,0,172,38,0,0,120,155,0,0,166,39,0,0,140,35,0,0,36,44,0,0,213,37,0,0,100,0,0,0,120,55,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,6,0,0]));
    };
    ws.onopen = (data) => {
        ws.network = new game.networkType();
        ws.network.codec.decodePreEnterWorldResponse = function (preEnterWorld) {
            wasm._MakeBlendField(0x18, 0x84);
            for (var _228 = wasm._MakeBlendField(228, preEnterWorld.remaining()),
                 _count = 0x0; preEnterWorld.remaining();) {
                wasm.HEAPU8[_228 + _count] = preEnterWorld.readUint8();
                _count++;
            }
            wasm._MakeBlendField(172, 0x24);
            for (var enterWorld = wasm._MakeBlendField(0x4, 0x98),
                 extra = new ArrayBuffer(0x40),
                 _64 = new Uint8Array(extra),
                 count = 0x0; count < 0x40; count++) _64[count] = wasm.HEAPU8[enterWorld + count];
            return {
                extra: extra
            };
        };

        ws.network.codec.encodeEnterWorld2 = function(buffer) {
            var _0x4f5914 = wasm._MakeBlendField(187, 22);

            for (var i = 0; i < 16; i++) {
                buffer.writeUint8(wasm.HEAPU8[_0x4f5914 + i]);
            }
        }
        ws.network.sendPacket = (e, t) => {
            const enc = ws.network.codec.encode(e, t);
            !ws.isclosed && ws.send(enc);
        };
        ws.onRpc = (data) => {
            if(data.name === "SetPartyList") {
                ws.parties = data.response;
            };
            if(data.name === "Leaderboard") {
                if(ws.b4) {
                    window.appSsrs({ population: ws.pop, leaderboard: data.response, parties: ws.parties, server: server.name });
                    hasSentData = true; ws.close(); return;
                };
                loadLbPacket();
                ws.b4 = true;
            };
        };
        ws.onmessage = msg => {
            let data = ws.network.codec.decode(msg.data);
            switch(data.opcode) {
                case 5:
                    ws.network.sendPacket(4, { displayName: `${randomCharacterGenerator()}`, extra: data.extra });
                    break;
                case 4:
                    if (!data.allowed) {
                        ssrs.innerHTML = `<strong>Server is full(32/32).</strong>`;
                        getElem("hud-intro-server")[0].selectedOptions[0].innerText = `${server.name} [32/32]`;
                        hasSentData = true;
                    }
                    ws.network.sendPacket(6, {});
                    ws.network.sendPacket(3, { left: 1, up: 1 });
                    ws.pop = data.players;
                    break;
                case 9:
                    ws.onRpc(data);
                    break;
            };
        };
        ws.onclose = () => {
            ws.isclosed = true;
            document.querySelectorAll(`#${iframeId}`).forEach(el => el.remove());
            if (!hasSentData) {
                console.log(`${server.name}'s condition is unknown (socket cannot access server).`);
                ssrs.innerHTML = `<strong>Server's condition is unknown.</strong> | <strong>Server: ${server.name}, ${server.id}</strong>`;
                hasSentData = true;
            }
        }
    };
};

window.ssal = () => {
    let iteration = 0,
/*         allData = [],
        pushData = [], */
        scanItem = [],
/*         scanItem = {
            item1: [],
            item2: [],
            item3: [],
        }, */
        id = 0,
        ssrs = document.getElementById("ssrs");

    const weeb = ["waifu", "hentai", "bodypillow", "ahegao", "yamete", "kimochi", "weeb", "fuck trollers", "nắc ngu", "pee pee ppoo oo", "i watch hentai for a living"];

    ssrs.innerHTML = `<i class="fa fa-refresh fa-spin"></i> <strong>Loading...</strong>`;

    if (!localStorage.reloadCount) localStorage.reloadCount = 0;
/*     for (let i = 1; i < 4; i++) localStorage[`results${i}`] = ""; */
    localStorage.results = "";

    let scanInterval = async() => {
        const { wasm, iframeId } = await fetchWasm(`scanner${id}`);
        const server = game.options.servers[Object.keys(game.options.servers).sort()[id]];
        const randomtext = weeb[Math.floor(Math.random() * weeb.length)];
        const url = `ws://${server.hostname}:80/`;

        let hasSentData = false;

/*         if (id == 25 && localStorage.reloadCount == 0) {
            console.warn('Reached 25 alts, reloading site...');
            localStorage.reloadCount = 1;
            location.reload();
            return;
        };
        if (id == 50 && localStorage.reloadCount == 1) {
            console.warn('Reached 25 alts, reloading site...');
            localStorage.reloadCount = 2;
            location.reload();
            return;
        }; */
        if (id == Object.keys(game.options.servers).length - 1) console.log('Scan will be finished after this.');

        id++;

        game.network.connectionOptions = { hostname: server.hostname };
        game.network.connected = true;
        const ws = new WebSocket(url);
        ws.binaryType = "arraybuffer";
        ws.isclosed = false;
        const loadLbPacket = () => {
            for (let i = 0; i < 30; i++) ws.send(new Uint8Array([3, 17, 123, 34, 117, 112, 34, 58, 49, 44, 34, 100, 111, 119, 110, 34, 58, 48, 125]));
            ws.send(new Uint8Array([7, 0]));
            ws.send(new Uint8Array([9,6,0,0,0,126,8,0,0,108,27,0,0,146,23,0,0,82,23,0,0,8,91,11,0,8,91,11,0,0,0,0,0,32,78,0,0,76,79,0,0,172,38,0,0,120,155,0,0,166,39,0,0,140,35,0,0,36,44,0,0,213,37,0,0,100,0,0,0,120,55,0,0,0,0,0,0,0,0,0,0,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,134,6,0,0]));
        };
        ws.onopen = (data) => {
            ws.network = new game.networkType();
            ws.network.codec.decodePreEnterWorldResponse = function (preEnterWorld) {
                wasm._MakeBlendField(24, 132);
                for (var _228 = wasm._MakeBlendField(228, preEnterWorld.remaining()),
                    _count = 0x0; preEnterWorld.remaining();) {
                    wasm.HEAPU8[_228 + _count] = preEnterWorld.readUint8();
                    _count++;
                }
                wasm._MakeBlendField(172, 0x24);
                for (var enterWorld = wasm._MakeBlendField(0x4, 0x98),
                    extra = new ArrayBuffer(0x40),
                    _64 = new Uint8Array(extra),
                    count = 0x0; count < 0x40; count++) _64[count] = wasm.HEAPU8[enterWorld + count];
                return {
                    extra: extra
                };
            };

            ws.network.codec.encodeEnterWorld2 = function(buffer) {
                var _0x4f5914 = wasm._MakeBlendField(187, 22);

                for (var i = 0; i < 16; i++) {
                    buffer.writeUint8(wasm.HEAPU8[_0x4f5914 + i]);
                }
            }
            ws.network.sendPacket = (e, t) => !ws.isclosed && ws.send(ws.network.codec.encode(e, t));
            ws.onRpc = (data) => {
                if (data.name === "SetPartyList") ws.parties = data.response;
                if (data.name === "Leaderboard") {
                    if (ws.b4) {
                        const response = data.response;
                        console.log(server.name,
                                    server.id,
                                    `Population: ${ws.pop}`,
                                    '\n', `#1 | name: ${response[0].name}, uid: ${response[0].uid}, score: ${response[0].score.toLocaleString()}, wave: ${response[0].wave}`,
                                    '\n', response,
                                    '\n', ws.parties
                                   );

                        window.appSsrs({server: server.name, id: server.id, population: ws.pop, leaderboard: response, parties: ws.parties});
                        scanItem.push({serverInfo: server, population: ws.pop, leaderboard: response, parties: ws.parties, type: "available"});
                        localStorage.setItem(`results`, JSON.stringify(scanItem));
                        hasSentData = true;
                        ws.close();

                        if (id == Object.keys(game.options.servers).length) {
/*                             allData.push(JSON.parse(localStorage.results1), JSON.parse(localStorage.results2), JSON.parse(localStorage.results3));
                            for (let result = 0; result < 3; result++) for (let i of allData[result]) pushData.push(i);
                            localStorage.setItem("results", JSON.stringify(pushData));
                            localStorage.reloadCount = 0; */
                            console.log(JSON.parse(localStorage.results));
                            setTimeout(() => { ssrs.innerHTML = ""; }, 5000);
                        } else scanInterval();
                        return;
                    };
                    loadLbPacket();
                    ws.b4 = true;
                };
            };
            ws.onmessage = msg => {
                const data = ws.network.codec.decode(msg.data);
                switch (data.opcode) {
                    case 5:
                        ws.network.sendPacket(4, { displayName: `${randomtext}`, extra: data.extra });
                        break;
                    case 4:
                        if (!data.allowed) {
                            console.log(`${server.name} is full (32/32).`);
                            ssrs.innerHTML = `<strong>Server is full(32/32)</strong> | <strong>Server: ${server.name}, ${server.id}</strong>`;

                            scanItem.push({serverInfo: server, population: 32, type: "unavailable"});
                            localStorage.setItem(`results`, JSON.stringify(scanItem));
                            hasSentData = true;

                            scanInterval();
                        }

                        ws.network.sendPacket(6, {});
                        ws.network.sendPacket(3, { left: 1, up: 1 });

                        ws.pop = data.players;
                        // game.network.connected = false;
                        break;
                    case 9:
                        ws.onRpc(data);
                        break;
                };
            };
        };
        ws.onclose = () => {
            ws.isclosed = true;
            document.querySelectorAll(`#${iframeId}`).forEach(el => el.remove());
            if (!hasSentData) {
                scanItem.push({serverInfo: server, population: null, type: "unknown"});
                localStorage.setItem(`results`, JSON.stringify(scanItem));

                console.log(`${server.name}'s condition is unknown (socket cannot access server).`);
                ssrs.innerHTML = `<strong>Server's condition is unknown.</strong> | <strong>Server: ${server.name}, ${server.id}</strong>`;
                scanInterval();
                hasSentData = true;
            }
        }
    };
    setTimeout(() => { scanInterval(); }, 5000);
};

window.appSsrs = res => {

    console.log(res);
    getElem("hud-intro-server")[0].selectedOptions[0].innerText = `${res.server} [${res.population}/32]`;

    let ssrs = document.getElementById("ssrs");
    ssrs.style.overflow = "auto";
    ssrs.style.height = "480px";
    ssrs.innerHTML = `
    <p><strong>Population: ${res.population}/32</strong></p>

    <h1>Leaderboard</h1>

    <hr />
    <div>
    ${res.leaderboard.map(lb => {
        return `
        <p>Rank: #${lb.rank + 1},
        Nickname: ${lb.name},
        Wave: ${lb.wave.toLocaleString("en")},
        Score: ${lb.score.toLocaleString("en")}</p>
        `;
    }).join("")}
    </div>
    <br>

    <h1>Parties</h1>

    <hr />
    ${res.parties.map(p => {
        return `
        <p>Name: ${p.partyName},
        ID: ${p.partyId},
        Members: ${p.memberCount},
        Public: ${p.isOpen}</p>
        `;
    }).join("")}
    <div>
    </div>

    <p><strong>${Date()}</strong></p>
    `;
};

var changeHeight = document.createElement("style")
changeHeight.type = "text/css"
document.body.appendChild(changeHeight)
var widget = `
<h1 style="text-transform: none;">Server Scanner</h1>
<p><i class="fa fa-info-circle"></i> Click on the <strong>Scan</strong> button to show the data of the selected server here.</p>
<div id="ssrs">
</div>
`;
let hil = getElem("hud-intro-youtuber")[0];
hil.innerHTML = widget;
hil.style.marginTop = "30px";

game.ui.components.Intro.errorElem = document.getElementById("ssrs");

// if (localStorage.reloadCount == 1 || localStorage.reloadCount == 2) window.ssal();

// some scan search
window.displayScanTable = () => {
    let data = [];
    for (let i of JSON.parse(localStorage.results)) data.push({serverName: i.serverInfo.name, serverId: i.serverInfo.id, population: i.population, state: i.type});
    console.table(data);
};

window.searchWithWave = (wave) => {
    let allResults = [];
    for (let i of JSON.parse(localStorage.results)) {
        for (let i2 in i.leaderboard) {
            if (i.leaderboard[i2].wave >= wave) allResults.push({player: i.leaderboard[i2].name, wave: i.leaderboard[i2].wave, server: `${i.serverInfo.id}, ${i.serverInfo.name}`});
        };
    };
    allResults.length > 0 ? console.log(allResults) : console.log('No results found!');
};

window.searchWithScore = (score) => {
    let allResults = [];
    for (let i of JSON.parse(localStorage.results)) {
        for (let i2 in i.leaderboard) {
            if (i.leaderboard[i2].score >= score) allResults.push({player: i.leaderboard[i2].name, score: i.leaderboard[i2].score, server: `${i.serverInfo.id}, ${i.serverInfo.name}`});
        };
    };
    allResults.length > 0 ? console.log(allResults) : console.log('No results found!');
};

window.searchWithName = (name) => {
    let allResults = [];
    for (let i of JSON.parse(localStorage.results)) {
        for (let i2 in i.leaderboard) {
            if (i.leaderboard[i2].name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) allResults.push({player: i.leaderboard[i2].name, wave: i.leaderboard[i2].wave, score: i.leaderboard[i2].score, server: `${i.serverInfo.id}, ${i.serverInfo.name}`});
        };
    };
    allResults.length > 0 ? console.log(allResults) : console.log('No results found!');
};

window.goToPos = (x, y) => {
    const targetX = parseInt(x),
          targetY = parseInt(y);
    if (!Number.isInteger(targetX) || !Number.isInteger(targetY)) return game.ui.components.PopupOverlay.showHint("Invalid value!");
    if (targetX > 23500 || targetX < 30 || targetY > 23500 || targetY < 30) return "cannot move to that specific position, sorry!";

    options.moving = true;

    let reachedTargetX = false;
    let reachedTargetY = false;

    let lastX = 0;
    let lastY = 0;

    let current_action = '';
    let stuckPrediction = 0;

    let timeInMs = 0;

    const interval = setInterval(() => {
        timeInMs += 100;

        if (!options.moving) return clearInterval(interval);

        if (reachedTargetX && reachedTargetY) {
            stop();
            console.log(`done moving. (x: ${targetX}, y: ${targetY}, time took: ${timeInMs}ms)`);
            getId('7i2').click();
            return clearInterval(interval);
        }

        const { x, y } = game.world.localPlayer.entity.fromTick.position;
        if (inRange(lastX, x, 5) && inRange(lastY, y, 5)) stuckPrediction++;

        if (stuckPrediction > 15) {
            console.log('looks like you got yourself in a confluffle!');
            switch(current_action) {
                case 'ne':
                    sw();
                    break;
                case 'se':
                    nw();
                    break;
                case 'nw':
                    se();
                    break;
                case 'sw':
                    ne();
                    break;
                case 'n':
                    s();
                    break;
                case 's':
                    n();
                    break;
                case 'e':
                    w();
                    break;
                case 'w':
                    e();
                    break;
            }
            if (!inRange(x, lastX, 350) && !inRange(y, lastY, 350)) stuckPrediction = 0;
            return;
        }

        lastX = x;
        lastY = y;

        if (!reachedTargetX && inRange(x, targetX, 150)) { reachedTargetX = true; return stopX(); }
        if (!reachedTargetY && inRange(y, targetY, 150)) { reachedTargetY = true; return stopY(); }

        if (targetX > x && targetY < y) { current_action = 'ne'; return ne(); }
        else if (targetX > x && targetY > y) { current_action = 'se'; return se(); }
        else if (targetX < x && targetY < y) { current_action = 'nw'; return nw(); }
        else if (targetX < x && targetY > y) { current_action = 'sw'; return sw(); }
        else if (!reachedTargetY && targetY < y) { current_action = 'n'; return n(); }
        else if (!reachedTargetX && targetX > x) { current_action = 'e'; return e(); }
        else if (!reachedTargetY && targetY > y) { current_action = 's'; return s(); }
        else if (!reachedTargetX && targetX < x) { current_action = 'w'; return w(); }
    }, 100);

    function inRange(pos, target, range) {
        return pos < target + range && pos > target - range;
    }

    function n() {
        Game.currentGame.network.sendPacket(3, { up: 1, down: 0 });
        Game.currentGame.network.sendPacket(3, { left: 0, right: 0 });
    }

    function ne() {
        Game.currentGame.network.sendPacket(3, { up: 1, down: 0 });
        Game.currentGame.network.sendPacket(3, { left: 0, right: 1 });
    }

    function e() {
        Game.currentGame.network.sendPacket(3, { up: 0, down: 0 });
        Game.currentGame.network.sendPacket(3, { left: 0, right: 1 });
    }

    function se() {
        Game.currentGame.network.sendPacket(3, { up: 0, down: 1 });
        Game.currentGame.network.sendPacket(3, { left: 0, right: 1 });
    }

    function s() {
        Game.currentGame.network.sendPacket(3, { up: 0, down: 1 });
        Game.currentGame.network.sendPacket(3, { left: 0, right: 0 });
    }

    function sw() {
        Game.currentGame.network.sendPacket(3, { up: 0, down: 1 });
        Game.currentGame.network.sendPacket(3, { left: 1, right: 0 });
    }

    function w() {
        Game.currentGame.network.sendPacket(3, { up: 0, down: 0 });
        Game.currentGame.network.sendPacket(3, { left: 1, right: 0 });
    }

    function nw() {
        Game.currentGame.network.sendPacket(3, { up: 1, down: 0 });
        Game.currentGame.network.sendPacket(3, { left: 1, right: 0 });
    }

    function stop() {
        Game.currentGame.network.sendPacket(3, { up: 0, down: 0 });
        Game.currentGame.network.sendPacket(3, { left: 0, right: 0 });
    }

    function stopX() {
        Game.currentGame.network.sendPacket(3, { left: 0, right: 0 });
    }

    function stopY() {
        Game.currentGame.network.sendPacket(3, { up: 0, down: 0 });
    }
}

window.macroActions = { actions: [], created: Date.now() };

window.macro = () => {
    let macro = window.macroActions;
    if (options.stopMacro) options.stopMacro = false;
    let run = () => {
        if (options.stopMacro) return;
        for (let i in macro.actions) {
            let action = macro.actions[i];
            setTimeout(() => {
                game.network.sendPacket(action.packet.opcode, action.packet.data);
                if (i == (macro.actions.length - 1)) {
                    run(); // could replace this with run() for infinite loop
                    game.network.sendInput({ up: 0, down: 0, left: 0, right: 0 });
                };
            }, action.timeout);
        };
    };
    run();
};

window.clearRecord = () => { window.macroActions.actions = []; };

const packet_enum = {
    0: 'PACKET_ENTITY_UPDATE',
    1: 'PACKET_PLAYER_COUNTER_UPDATE',
    2: 'PACKET_SET_WORLD_DIMENSIONS',
    3: 'PACKET_INPUT',
    4: 'PACKET_ENTER_WORLD',
    5: 'PACKET_PRE_ENTER_WORLD',
    6: 'PACKET_ENTER_WORLD2',
    7: 'PACKET_PING',
    8: 'PACKET_ATTRIBUTE',
    9: 'PACKET_RPC'
}

game.network.sendPacket = (opcode, data) => {
    const enc = game.network.codec.encode(opcode, data);
    game.network.connected && game.network.socket.send(enc);
    if (window.packetDebug) console.log('%c OUTGOING', 'color: #00ff00', packet_enum[opcode], data, enc);
    if (options.recordMacro) {
        if (data.name == "Metrics") { return; };
        if (opcode == 7) { return; };
        window.macroActions.actions.push({
            timeout: Date.now() - window.macroActions.created,
            packet: { opcode: opcode, data: data }
        });
    };
};

game.network.onMessage = (msg => {
    game.network.sendPingIfNecessary();
    const decoded = game.network.codec.decode(msg.data);

    if (window.packetDebug && decoded.opcode !== 0) console.log('%c INCOMING', 'color: #ff0000', packet_enum[decoded.opcode], decoded)
    game.network.emitter.emit(packet_enum[decoded.opcode], decoded);
});


let blockedNames = [];

window.blockPlayer = name => {
    game.ui.components.PopupOverlay.showConfirmation(`Are you sure you want to block ${name}?`, 3500, () => {
        blockedNames.push(name);
        for(let msg of Array.from(document.getElementsByClassName("hud-chat-message"))) {
            if(msg.childNodes[2].innerText === name) {
                let bl = msg.childNodes[0];
                bl.innerHTML = "Unblock";
                bl.style.color = "blue";
                bl.onclick = () => {
                    window.unblockPlayer(name);
                };
            };
        };
    }, () => {});
};

window.unblockPlayer = name => {
    blockedNames.splice(blockedNames.indexOf(name), 1);
    for(let msg of Array.from(document.getElementsByClassName("hud-chat-message"))) {
        if(msg.childNodes[2].innerText === name) {
            let bl = msg.childNodes[0];
            bl.innerHTML = "Block";
            bl.style.color = "red";
            bl.onclick = () => {
                window.blockPlayer(name);
            };
        };
    };
};

const getClock = () => {
    var date = new Date();
    var d = date.getDate();
    var d1 = date.getDay();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds()
    var session = "PM";

    if(h == 2){
        h = 12;
    };

    if(h < 13) {
        session = "AM"
    };
    if(h > 12){
        session = "PM";
        h -= 12;
    };

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    return `${h}:${m} ${session}`;
}

var emojiList = {
    hmm: "https://cdn.discordapp.com/emojis/724365641963929611.png?size=48",
    pog: "https://cdn.discordapp.com/emojis/721070353337811026.png?size=48",
    pepehands: "https://cdn.discordapp.com/emojis/733406770139103293.png?size=48",
    pepeEyes: "https://cdn.discordapp.com/emojis/869573233794486323.gif?size=48",
    pepeHappy: "https://cdn.discordapp.com/emojis/801475958883614811.png?size=48",
    sadge: "https://cdn.discordapp.com/emojis/826530556974989344.png?size=48",
    ha: "https://cdn.discordapp.com/emojis/782756472886525953.png?size=48",
    kekw: "https://cdn.discordapp.com/emojis/748511358076846183.png?size=48",
    pogEyes: "https://cdn.discordapp.com/emojis/786979080406564885.png?size=48",
    appalled: "https://cdn.discordapp.com/emojis/830880294881853530.png?size=48",
    pogYou: "https://cdn.discordapp.com/emojis/790293794716516430.png?size=48",
    pogChag: "https://cdn.discordapp.com/emojis/831156303497134090.png?size=48",
    pogey: "https://cdn.discordapp.com/emojis/790293759861719050.png?size=48",
    weirdChamp: "https://cdn.discordapp.com/emojis/757553915389673502.png?size=48",
    monkaS: "https://cdn.discordapp.com/emojis/757179783573405766.png?size=48",
    yep: "https://cdn.discordapp.com/emojis/758356179477987339.png?size=48",

    weirdButOkay: "https://cdn.discordapp.com/emojis/831156194247966782.gif?size=48",
    pogpogpogpog: "https://cdn.discordapp.com/emojis/869580566096379974.gif?size=48",
    wooyeah: "https://cdn.discordapp.com/emojis/791008461420888084.gif?size=48",
    idk: "https://cdn.discordapp.com/emojis/882513306164805642.gif?size=48",
}


Game.currentGame.network.emitter.removeListener("PACKET_RPC", Game.currentGame.network.emitter._events.PACKET_RPC[1])
const onMessageReceived = e => {
    if (blockedNames.includes(e.displayName) || window.chatDisabled) { return; };
    let a = Game.currentGame.ui.getComponent("Chat"),
        b = e.displayName.replace(/<(?:.|\n)*?>/gm, ''),
        c = e.message.replace(/<(?:.|\n)*?>/gm, '')
    .replace(/(?:f|F)uck/gi, `<img src="https://cdn.discordapp.com/emojis/907625398832070667.png?size=80" height="16" width="18" style="margin: 1px 0 0 0;"></img>`)
    .replace(/s[3e]x+/gi, `<img src="https://cdn.discordapp.com/emojis/953759638350872666.gif?size=80&quality=lossless" height="16" width="18" style="margin: 1px 0 0 0;"></img>`)
    .replace(/n+[i1]+gg+[a@]+/i, `<img src="https://cdn.discordapp.com/emojis/902742239996936226.webp?size=80" height="16" width="17" style="margin: 1px 0 0 0;"></img>`);
    let arr = c.split(':');

    for (let i = 1; i < arr.length; i += 2) {
        // console.log(arr[i]);
        if (!emojiList[arr[i]]) {
            // console.log(arr);
            arr = [c];
        } else {
            arr[i] = `<img src="${emojiList[arr[i]]}" height="16" width="18" style="margin: 1px 0 0 0;"></img>`
        };
    }

    let d = a.ui.createElement(`<div class="hud-chat-message"><a href="javascript:void(0);" onclick="window.blockPlayer(\`${e.displayName}\`)" style="color: red;">Block</a> <strong>${b}</strong> <small> - ${getClock()}</small>: ${arr.join(" ")}</div>`);
    a.messagesElem.appendChild(d);
    a.messagesElem.scrollTop = a.messagesElem.scrollHeight;
};
Game.currentGame.network.addRpcHandler("ReceiveChatMessage", onMessageReceived);

!game.world.removeEntity2 && (game.world.removeEntity2 = game.world.removeEntity);
game.world.removeEntity = (uid) => {
     if (game.world.entities[uid].fromTick.model == "Tree" || game.world.entities[uid].fromTick.model == "Stone" || game.world.entities[uid].fromTick.model == "NeutralCamp") return;
     game.world.removeEntity2(uid);
}

Game.currentGame.world._createEntity = Game.currentGame.world.createEntity;
Game.currentGame.world.createEntity = (t) => {
    if (Game.currentGame.world.entities[t.uid]) return;
    Game.currentGame.world._createEntity(t);
}

Game.currentGame.network.addRpcHandler("LocalBuilding", buildings => {
    goldStash = Object.values(Game.currentGame.ui.buildings).find(building => building.type == "GoldStash");

    if (options.rebuild || options.autoUpgrade) {
        for (let i in buildings) {
            const building = buildings[i];
            if (options.rebuild) {
                if (building.dead === 1) {
                    // The building has died
                    if (savedBase[building.type]?.[building.x]?.[building.y]) {
                        toBeReplaced[building.type] = toBeReplaced[building.type] || {};
                        toBeReplaced[building.type][building.x] = toBeReplaced[building.type][building.x] || {};
                        toBeReplaced[building.type][building.x][building.y] = true;
                        delete toBeUpgraded[building.uid];
                    }
                } else {
                    // The building was upgraded/placed
                    if (savedBase[building.type]?.[building.x]?.[building.y] !== undefined) {
                        if (building.tier < savedBase[building.type][building.x][building.y]) toBeUpgraded[building.uid] = building.tier;
                        else delete toBeUpgraded[building.uid];
                        delete toBeReplaced[building.type]?.[building.x]?.[building.y];
                    }
                }
            }

            if (options.autoUpgrade) {
                if (building.dead !== 1) {
                    if (building.tier < 8) {
                        autoUpgradeList[building.uid] = true;
                    } else {
                        delete autoUpgradeList[building.uid];
                    }
                } else {
                    delete autoUpgradeList[building.uid];
                }
            }
        }
    }
})

addFunctionToElem('12i', 'autoUpgrade', 'Auto Upgrade', 'btn-red?btn-blue', () => {
    for (let building of Object.values(game.ui.buildings)) {
        if (building.tier < 8) {
            autoUpgradeList[building.uid] = true;
        }
    }
}, () => {
    autoUpgradeList = {};
});

addFunctionToElem('13i', 'rebuild', 'Rebuilder', 'btn-red?btn-blue', () => {
    for (let i in Game.currentGame.ui.buildings) {
        const building = Game.currentGame.ui.buildings[i];
        savedBase[building.type] = savedBase[building.type] || {};
        savedBase[building.type][building.x] = savedBase[building.type][building.x] || {};
        savedBase[building.type][building.x][building.y] = building.tier;
    }
}, () => {
    savedBase = {};
    toBeReplaced = {};
    toBeUpgraded = {};
})

addEventListener('keyup', function(e) {
    if(document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
       if(e.key === "~") {
          window.addMarker();
          game.ui.components.PopupOverlay.showHint(`Added Marker #${markerId - 1}`);
       };
    }
});

var map = document.getElementById("hud-map");
let markerId = 1;

window.addMarker = () => {
    map.insertAdjacentHTML("beforeend", `
    <div style="color: red; display: block; left: ${parseInt(game.ui.components.Map.playerElems[game.world.getMyUid()].marker.style.left) - 4}%; top: ${parseInt(game.ui.components.Map.playerElems[game.world.getMyUid()].marker.style.top) - 12}%; position: absolute;" class='map-display'>
        <i class='fa fa-map-marker'>${markerId++}</i>
    </div>`)
};

window.ssMode = () => {
    window.ssModeToggle = !window.ssModeToggle;
    var mba = document.querySelectorAll([".hud-bottom-right", ".hud-bottom-left", ".hud-bottom-center", ".hud-center-left", ".hud-center-right", ".hud-chat", ".hud-chat-messages", ".hud-top-right", ".refrsh"]);
    for(let mb of mba) {
        if (mb.style.display === "none") {
            mb.style.display = "block";
        } else {
            mb.style.display = "none";
        }
    };
    document.querySelector(".hud-bottom-right").appendChild(document.querySelector("#hud-shield-bar"));
    document.querySelector(".hud-bottom-right").appendChild(document.querySelector("#hud-health-bar"));
    document.querySelector(".hud-bottom-right").insertAdjacentElement("afterbegin", document.querySelector("#hud-party-icons"));
    document.querySelector(".hud-bottom-left").insertAdjacentElement("afterbegin", document.querySelector("#hud-day-night-ticker"));
    // original screenshot mode code by deathrain, modified by eh
};

document.addEventListener("keydown", e => {
    if(document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
        if(e.key === "?") {
            window.ssMode();
        };
    };
})

/*
const fullRSS = () => {
    if(!window.frss) { return; };
    let resources = ["wood", "stone", "gold"];
    let pt = game.ui.playerTick;
    let rc = game.ui.components.Resources;
    for(let i = 0; i < resources.length; i++) {
        let rs = resources[i];
        rc[`${rs}Elem`].innerHTML = Math.round(pt[rs]).toLocaleString("en");
    };
    rc.tokensElem.innerHTML = Math.round(pt.token).toLocaleString("en");
};

let sipt = setInterval(() => {
    game.ui.addListener('playerTickUpdate', fullRSS);
}, 10);


setTimeout(() => { clearInterval(sipt); }, 90);
*/

window.diep = false;
game.network.addEntityUpdateHandler(() => {
    if (window.diep === true) {
        for (let i in game.world.entities) {
            if (game.world.entities[i].entityClass === "PlayerEntity") {
                if (game.world.entities[i].fromTick.partyId !== game.ui.playerPartyId) {
                    if (game.world.entities[i].fromTick.position) {
                        // this doesnt chek if the player is in the 800px range or not...
                        const roundposx = Math.round(game.world.entities[i].fromTick.position.x);
                        const roundposy = Math.round(game.world.entities[i].fromTick.position.y);
                        if (roundposx < game.ui.playerTick.position.x + 300 &&
                            roundposx > game.ui.playerTick.position.x - 300 &&
                            roundposy > game.ui.playerTick.position.y - 300 &&
                            roundposy < game.ui.playerTick.position.y + 300) {
                            let offset = 48;
                            let oldOffset = 48
                            let earlyOffset = 48;
                            const roundx = Math.round(game.world.entities[i].fromTick.position.x / 24) * 24;
                            const roundy = Math.round(game.world.entities[i].fromTick.position.y / 24) * 24;

                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + offset, y: roundy - offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - offset, y: roundy - offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + offset, y: roundy + offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - offset, y: roundy + offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - offset, y: roundy, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + offset, y: roundy, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx, y: roundy - offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx, y: roundy + offset, yaw: 0 });

                            offset *= 2;

                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + offset, y: roundy - offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - offset, y: roundy - offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + offset, y: roundy + offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - offset, y: roundy + offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - offset, y: roundy, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + offset, y: roundy, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx, y: roundy - offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx, y: roundy + offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + oldOffset, y: roundy + offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - oldOffset, y: roundy + offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + oldOffset, y: roundy - offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - oldOffset, y: roundy - offset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + offset, y: roundy - oldOffset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - offset, y: roundy - oldOffset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx + offset, y: roundy + oldOffset, yaw: 0 });
                            game.network.sendRpc({ name: "MakeBuilding", type: "Wall", x: roundx - offset, y: roundy + oldOffset, yaw: 0 });
                        };
                    };
                };
            };
        };
    };
});

window.idkWhatToCallThis = new Set();

function isEven(number) {
    return number % 2 === 0;
}

game.network.sendRpc = (data) => {
    if (data.name === "MakeBuilding" && data.type === "Wall" && options.wallBlock) {
//        console.log(data.x, data.y);
        const blockWidth = document.querySelector('#blockX').valueAsNumber;
        const blockHeight = document.querySelector('#blockY').valueAsNumber;

        for (let x =
             -((blockWidth -
               (isEven(blockWidth) ? 0 : 1)) / 2) * 48;
             x <= (blockWidth -
                   (isEven(blockWidth) ? 0 : 1)) / 2 * 48;
             x += 48) {
             for (let y =
                  -((blockHeight -
                    (isEven(blockHeight) ? 0 : 1)) / 2) * 48;
                  y <= (blockHeight -
                        (isEven(blockHeight) ? 0 : 1)) / 2 * 48;
                  y += 48) {
                 game.network.sendPacket(9, {
                     name: "MakeBuilding",
                     type: "Wall",
                     x: data.x + x,
                     y: data.y + y,
                     yaw: 0
                 });
             };
        };
        return;
    }; // xy
    game.network.sendPacket(9, data);
};

function sellAllWallBlocks() {
    for (let i of [...window.idkWhatToCallThis]) console.log(game.world.entities[game.world.entityGrid.getEntitiesInCell(i)].fromTick.model);
}

addFunctionToElem('14i', 'wallBlock', 'Wall Block', 'btn-red?btn-blue');

let wallElem = document.createElement("a");
wallElem.classList.add("hud-buff-bar-item");
wallElem.setAttribute("data-building", "Wall");
document.getElementsByClassName("hud-buff-bar")[0].appendChild(wallElem);
wallElem.style.display = "none";

let shield = document.createElement("a");
shield.classList.add("hud-toolbar-item");
shield.classList.add("hud-toolbar-item-shield");
shield.setAttribute("data-item", "ZombieShield");
shield.setAttribute("data-tier", "1");
document.getElementsByClassName("hud-toolbar-inventory")[0].appendChild(shield);

shield.bindInputEvents = function () {
    this.targetElem = this;
    this.anchor = 'top';
    this.hide = function () {
        this.tooltipElem && (this.tooltipElem.remove(), delete this.tooltipElem);
    }

    this.targetElem.addEventListener('mouseenter', function () {
        let toolTip = '\n              <div id=\"hud-tooltip\" class=\"hud-tooltip\">\n             Buy Shield ('+ game.ui.itemSchema.ZombieShield.goldCosts[game.ui.inventory.ZombieShield ? game.ui.inventory.ZombieShield?.tier : 0] +' gold)<div>\n              ';
        document.body.insertAdjacentHTML(`beforeend`, toolTip);
        this.tooltipElem = document.getElementById(`hud-tooltip`);
        let clientRect = this.targetElem.getBoundingClientRect(),
            position = {'left': 0, 'top': 0};
        'top' == this.anchor ? (position.left = clientRect.left + clientRect.width / 0x2 - this.tooltipElem.offsetWidth / 0x2,
                                position.top = clientRect.top - this.tooltipElem.offsetHeight - 0x14) : `bottom` == this.anchor ? (position.left = clientRect.left + clientRect.width / 0x2 - this.tooltipElem.offsetWidth / 0x2,
                                                                                                                                   position.top = clientRect.top + clientRect.height + 0x14) : `left` == this.anchor ? (position.left = clientRect.left - this.tooltipElem.offsetWidth - 0x14,
                                                                                                                                   position.top = clientRect.top + clientRect.height / 0x2 - this.tooltipElem.offsetHeight / 0x2) : `right` == this.anchor && (position.left = clientRect.left + clientRect.width + 0x14, position.top = clientRect.top + clientRect.height / 0x2 - this.tooltipElem.offsetHeight / 0x2);
        this.tooltipElem.className = `hud-tooltip hud-tooltip-` + this.anchor;
        this.tooltipElem.style.left = position.left + 'px';
        this.tooltipElem.style.top = position.top + 'px';
    });
    this.targetElem.addEventListener(`mouseleave`, function () {
        this.hide();
    });
}
shield.bindInputEvents();

document.getElementsByClassName("hud-toolbar-item-shield")[0].addEventListener("click", function() {
    if (game.ui.inventory.ZombieShield) {
        Game.currentGame.network.sendRpc({ name: "BuyItem", itemName: "ZombieShield", tier: game.ui.inventory.ZombieShield.tier + 1});
    } else {
        Game.currentGame.network.sendRpc({ name: "BuyItem", itemName: "ZombieShield", tier: 1});
    }
});
Game.currentGame.network.addRpcHandler("DayCycle", function(e) {
    if (game.ui.inventory.ZombieShield) {
        if (game.ui.inventory.ZombieShield.tier === 10) {
            shield.style.display = "none";
        } else if (shield.style.display === "none" && game.ui.inventory.ZombieShield.tier !== 10) {
            shield.style.display = "block";
        };
    };
    ticker.tickData = e;
    if (shield.style.display === "none" && !game.ui.inventory.ZombieShield) shield.style.display = "block";
    if (game.ui.playerTick && e.isDay) getactiveCommingbosswaves2() ? bossAlert.style.display = "block" : bossAlert.style.display = "none";
});

/*
let upgradeElem = document.createElement('div');
upgradeElem.style.transform = "translate(-110px, -120px)";
upgradeElem.innerHTML = `
<a id="buyPickaxe" class="hud-toolbar-item" style="color: white;background: rgba(255, 255, 255, 0);margin: 0 2px 0 0;" onclick="buyItem('Pickaxe');"><i class="fa fa-plus" aria-hidden="true"></i></a>
<a id="buySpear" class="hud-toolbar-item" style="color: white;background: rgba(255, 255, 255, 0);margin: 0 2px 0 0;" onclick="buyItem('Spear');"><i class="fa fa-plus" aria-hidden="true"></i></a>
<a id="buyBow" class="hud-toolbar-item" style="color: white;background: rgba(255, 255, 255, 0);margin: 0 2px 0 0;" onclick="buyItem('Bow');"><i class="fa fa-plus" aria-hidden="true"></i></a>
<a id="buyBomb" class="hud-toolbar-item" style="color: white;background: rgba(255, 255, 255, 0);margin: 0 2px 0 0;" onclick="buyItem('Bomb');"><i class="fa fa-plus" aria-hidden="true"></i></a>
`;
upgradeElem.style.opacity = "0";
upgradeElem.id = "upgradeElem";
document.getElementsByClassName('hud-toolbar-inventory')[0].appendChild(upgradeElem);
upgradeElem.onmouseenter = () => { upgradeElem.style.opacity = "1"; };
upgradeElem.onmouseleave = () => { upgradeElem.style.opacity = "0"; };

window.buyItem = (item) => {
    game.network.sendRpc({name: "BuyItem", itemName: item, tier: game.ui.inventory[item] ? game.ui.inventory[item].tier + 1 : 1});
}

game.network.addRpcHandler('SetItem', (e) => {
    if (e.tier == 8 && e.itemName !== "ZombieShield") {
        getId(`buy${e.itemName}`).onclick = null;
        getId(`buy${e.itemName}`).style.opacity = "0";
    }
});
*/


document.addEventListener("keydown", (e) => {
    if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
        switch (e.code) {
            case "Period":
                getId("12i").click();
                break;
// why bind it to X so bad
            case "Equal":
                options.autoBow = !options.autoBow;
                if (options.autoBow) {
                    if (game.ui.inventory.Bow) {
                        game.network.sendRpc({name: "EquipItem", itemName: "Bow", tier: game.ui.inventory.Bow.tier})
                    } else {
                        game.network.sendRpc({name: "BuyItem", itemName: "Bow", tier: 1})
                        game.network.sendRpc({name: "EquipItem", itemName: "Bow", tier: 1})
                    }
                } else {
                    game.network.sendRpc({name: "EquipItem", itemName: game.ui.playerTick?.weaponName, tier: game.ui.inventory[game.ui.playerTick?.weaponName]?.tier})
                }
                break;
// hate it when using Alt+Z to switch from VIE to ENG
            case "KeyF":
                healPlayer();
                break;
            case "Comma":
                getId("11i").click();
                break;
            case "KeyK":
                getId("4i3").click();
                break;
            case "KeyM":
                game.network.sendRpc({
                    "name": "BuyItem",
                    "itemName": "PetRevive",
                    "tier": 1
                })
                game.network.sendRpc({
                    "name": "EquipItem",
                    "itemName": "PetRevive",
                    "tier": 1
                })
                break;
        }
        if (e.key === "!") {
            getId('14i').click();
            if (wallElem.style.display == "none" || wallElem.style.display == "") {
                wallElem.style.display = "block";
            } else {
                wallElem.style.display = "none";
            };
        };
    }
});

game.network.addPreEnterWorldHandler(() => console.log('MBF 5'));

game.network.sendEnterWorld2 = () => {
    console.log('MBF 6');
    game.network.sendPacket(6, {});
};

game.network.addEnterWorldHandler((e) => {
	setTimeout(() => {
/* 		game.world.myUid = null;
        game.world.getMyUid = () => {
            return e.uid;
        }; */
        oldParty = game.ui.playerPartyMemebers;
        oldPartyId = game.ui.getPlayerPartyId();
	}, 500);
    if (!e.allowed) {
        getElem("hud-intro-play")[0].innerText = "";
        getId('playspan').style.margin = '-130px 0px 0px 545px';
        getId('playspan').style.display = "block";
    }
    console.log('MBF 4', e);
});

window.sendAitoAlt = () => {
    let aitoInterval = async() => {
        if (!options.aito) return;
        let { wasm, iframeId } = await fetchWasm('aitoWasm');
        let ws = new WebSocket(`ws://${game.options.servers[game.options.serverId].hostname}:80`);
        ws.binaryType = "arraybuffer";
        ws.onclose = () => {
            ws.isclosed = true;
            try {
                document.querySelectorAll(`#${iframeId}`).forEach(el => el.remove());
            } catch {}
        }
        ws.onopen = () => {
            ws.network = new Game.currentGame.networkType();
            ws.network.sendInput = (t) => {
                ws.network.sendPacket(3, t);
            };
            ws.network.sendRpc = (t) => {
                ws.network.sendPacket(9, t);
            };
            ws.network.sendPacket = (e, t) => {
                !ws.isclosed && ws.send(ws.network.codec.encode(e, t));
            };
            ws.network.codec.decodePreEnterWorldResponse = function (preEnterWorld) {
                wasm._MakeBlendField(0x18, 0x84);
                for (var _228 = wasm._MakeBlendField(228, preEnterWorld.remaining()),
                     _count = 0x0; preEnterWorld.remaining();) {
                    wasm.HEAPU8[_228 + _count] = preEnterWorld.readUint8();
                    _count++;
                }
                wasm._MakeBlendField(172, 0x24);
                for (var enterWorld = wasm._MakeBlendField(0x4, 0x98),
                     extra = new ArrayBuffer(0x40),
                     _64 = new Uint8Array(extra),
                     count = 0x0; count < 0x40; count++) _64[count] = wasm.HEAPU8[enterWorld + count];
                return {
                    extra: extra
                };
            };

            ws.network.codec.encodeEnterWorld2 = function(buffer) {
                var _0x4f5914 = wasm._MakeBlendField(187, 22);

                for (var i = 0; i < 16; i++) {
                    buffer.writeUint8(wasm.HEAPU8[_0x4f5914 + i]);
                }
            }
        }
        ws.onmessage = msg => {
            ws.data = ws.network.codec.decode(msg.data);
            if (ws.data.opcode === 4) {
                ws.network.sendPacket(6, {});
                ws.network.sendInput({left: 1, up: 1});
            }
            if (ws.data.opcode === 5) {
                ws.network.sendPacket(4, { displayName: 'https://arcaea.lowiro.com/', extra: ws.data.extra });

                // failsafe
                setTimeout(() => {
                    if (ws.data.opcode === 5) {
                        ws.close();
                        aitoInterval();
                    }
                }, 2500);
            };
            if (ws.data.uid) ws.uid = ws.data.uid;
            if (ws.data.name) ws.dataType = ws.data;
/*             if (!options.aito && !ws.isclosed) {
                ws.isclosed = true;
                ws.close();
            } */
            if (ws.data.name == "DayCycle") {
                ws.isDay = ws.data.response.isDay;
                if (!ws.isDay && !ws.isclosed) {
                    ws.close();
                    aitoInterval();
                }
            }
            if (ws.data.name == "Dead") {
                ws.network.sendInput({
                    respawn: 1
                });
            }
            if (ws.data.name == "Leaderboard") {
                ws.lb = ws.data;
                if (ws.psk) {
                    ws.network.sendRpc({
                        name: "JoinPartyByShareKey",
                        partyShareKey: game.ui.getPlayerPartyShareKey()
                    });
                    if (ws.psk.response.partyShareKey == game.ui.getPlayerPartyShareKey()) {
                        ws.network.sendRpc({
                            name: "BuyItem",
                            itemName: "Pause",
                            tier: 1
                        });
                    }
                }
                ws.network.sendPing({nonce: 0});
                ws.network.sendRpc(game.metrics.metrics);
            }
            if (ws.data.name == "PartyShareKey") ws.psk = ws.data;
        };
    };
    aitoInterval();
};

let timesTried = 0;
window.playerFinder = () => {
    let rank;
    rank = (document.getElementById("findrank").value == "") ? 1 : document.getElementById("findrank").value;

    let scanInterval = async() => {
        if (!options.finder) return;
        let ver = false;
        let playerData = game.ui.components.Leaderboard.leaderboardData[rank - 1];
        let { wasm, iframeId } = await fetchWasm(`finderWasm${timesTried}`);
        let ws = new WebSocket(`ws://${game.options.servers[game.options.serverId].hostname}:80`);
        ws.binaryType = "arraybuffer";
        ws.onclose = () => {
            ws.isclosed = true;
            try {
                document.getElementById(`${iframeId}`).remove();
            } catch {}
        }
        ws.onopen = (data) => {
            ws.network = new Game.currentGame.networkType();
            ws.network.sendInput = (t) => { ws.network.sendPacket(3, t); };
            ws.network.sendRpc = (t) => { ws.network.sendPacket(9, t); };
            ws.network.sendPacket = (e, t) => { if (!ws.isclosed) { ws.send(ws.network.codec.encode(e, t)); } };
            ws.network.codec.decodePreEnterWorldResponse = function (preEnterWorld) {
                wasm._MakeBlendField(0x18, 0x84);
                for (var _228 = wasm._MakeBlendField(228, preEnterWorld.remaining()),
                     _count = 0x0; preEnterWorld.remaining();) {
                    wasm.HEAPU8[_228 + _count] = preEnterWorld.readUint8();
                    _count++;
                }
                wasm._MakeBlendField(172, 0x24);
                for (var enterWorld = wasm._MakeBlendField(0x4, 0x98),
                     extra = new ArrayBuffer(0x40),
                     _64 = new Uint8Array(extra),
                     count = 0x0; count < 0x40; count++) _64[count] = wasm.HEAPU8[enterWorld + count];
                return {
                    extra: extra
                };
            };

            ws.network.codec.encodeEnterWorld2 = function(buffer) {
                var _0x4f5914 = wasm._MakeBlendField(187, 22);

                for (var i = 0; i < 16; i++) {
                    buffer.writeUint8(wasm.HEAPU8[_0x4f5914 + i]);
                }
            }
        }
        ws.onmessage = msg => {
            ws.data = ws.network.codec.decode(msg.data);
            if (ws.data.opcode === 4) ws.network.sendPacket(6, {});
            if (ws.data.opcode === 5) {
                ws.network.sendPacket(4, { displayName: 'https://arcaea.lowiro.com/', extra: ws.data.extra });

                // failsafe
                setTimeout(() => {
                    if (ws.data.opcode === 5) {
                        ws.close();
                        scanInterval();
                    }
                }, 2500);
            };
            if (ws.data.uid) {
                ws.uid = ws.data.uid;
            }
            if (ws.data.entities) {
                let partyUid = [];
                for (let i2 of game.ui.playerPartyMembers) partyUid.push(i2.playerUid);
                for (let i in ws.data.entities) {
                    if (ws.data.entities[i].name) {
                        ver = true;
                        if (ws.data.entities[i].uid !== playerData.uid && ws.data.entities[i].uid !== ws.uid && partyUid.indexOf(ws.data.entities[i].uid) < 0) console.log(ws.data.entities[i]);
                    };
                    if (ws.data.entities[i].uid == playerData.uid) {
                        window.playerX = Math.round(ws.data.entities[i].position.x);
                        window.playerY = Math.round(ws.data.entities[i].position.y);
                        /*
                        document.getElementsByClassName("16i2")[0].value = "(" + window.playerX + ", " + window.playerY + ")";
                        document.getElementsByClassName("18i2")[0].innerText = "Active Player Finder";
                        */
                        getId("sendFinder").click();
                        game.ui.components.PopupOverlay.showHint(`Found player at x: ${window.playerX}, y: ${window.playerY}.`);
                        map.insertAdjacentHTML("beforeend", `<div style="color: white; display: block; left: ${parseInt(Math.round(window.playerX / game.world.getHeight() * 100)) - 4}%; top: ${parseInt(Math.round(window.playerY / game.world.getWidth() * 100)) - 12}%; position: absolute;" class='map-display'><i class='fa fa-map-marker'></i></div>`)

                        console.log(ws.data.entities[i], `found after ${timesTried} attempts`);
                        timesTried = 0;
                        ws.close();
                    }
                    if (ws.data.entities[i].model == "GoldStash") {
                        let stashUid = ws.data.entities[i].uid;
                        map.insertAdjacentHTML("beforeend", `<div id="${stashUid}" style="color: white; display: block; left: ${parseInt(Math.round(ws.data.entities[i].position.x / game.world.getHeight() * 100)) - 4}%; top: ${parseInt(Math.round(ws.data.entities[i].position.y / game.world.getWidth() * 100)) - 12}%; position: absolute;" class='map-display'><i class='fa fa-map-marker'></i></div>`)
                        console.log(ws.data.entities[i]);
                        setTimeout(() => {
                            document.getElementById(`${stashUid}`).remove();
                        }, 240000);
                    }
                }
                ws.network.sendInput({left: 1, up: 1});
            }
            if (ws.data.name == "DayCycle") {
                ws.isDay = ws.data.response.isDay;
            }
            if (ws.data.name == "Dead") {
                ws.network.sendInput({respawn: 1});
            }
            if (ver && !ws.isclosed) {
                ws.isclosed = true;
                timesTried++;
                setTimeout(() => {
                    ws.close();
                    scanInterval();
                }, 5000);
            }
            if (ws.data.name == "PartyShareKey") {
                ws.psk = ws.data;
                ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: game.ui.playerPartyShareKey});
            }
        }
    }
    scanInterval();
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(result){
        var r= parseInt(result[1], 16);
        var g= parseInt(result[2], 16);
        var b= parseInt(result[3], 16);
        return [r, g, b];
    }
    return null;
};

window.resetColor = function() {
    for (let i in game.world.entities) {
        if (game.world.entities[i].entityClass === "PlayerEntity") {
            game.world.entities[i].currentModel.nameEntity.setColor(220, 220, 220);
        };
    };
};

let enemyStash;
window.togglexkey = () => {
    window.xkey = !window.xkey;
    enemyStash = Object.values(Game.currentGame.world.entities).find(building => building.fromTick.model == "GoldStash");
}

window.allSockets = [];
window.workerList = [];
let cloneTimeout = false;
let targetPos = {x: 0, y: 0};
// window.locationList = {};

let inull = true;
let i1 = true;
let i2 = true;
let i3 = true;

// .catch(console.log('%c [WASM]', 'color: #ffff00', 'WebAssembly failed to fetch'));

const fetchWasm = async(iframeName) => {
    return new Promise(async resolve => {
        let iframeId;
        // try - catch block seems to not handle the "no source" error
        // try {
            const iframe = document.createElement('iFrame');
            iframe.style.display = 'none';
            iframe.src = 'sockets';
            iframe.id = iframeId = !!iframeName ? iframeName : `wasmIframe${altname}`;
            document.body.append(iframe);
        // } catch {};

        const container = document.getElementById(iframeId);
        function removeWasm() {
            try {
                container.remove();
            } catch {
                console.log('%c [WASM]', 'color: #ffff00', 'Failed to remove WebAssembly instance');
            }
        }
        container.addEventListener('load', async function() {
            this.contentWindow.socketId = window.allSockets.length - 1;
            this.contentWindow.eval(`
class WAssembly {
    constructor() {
        this.textEncoder = new TextDecoder('utf8');
    }

    #a_a(a) {
        if (parent.wasmTrace) console.log('%c [TRACE]', 'color: #FFA500;', 'A / A - Memory Allocation');
        let _0x37c280 = parent.eval(this.#decodeParam(a));

        if (!_0x37c280) return 0;
        _0x37c280 += '';

        const _0x5c3737 = this.#_0x31ce17(_0x37c280);

        return (!this.#a_e.bufferSize || this.#a_e.bufferSize < _0x5c3737 + 0x1)
        && (this.#a_e.bufferSize && this._free(this.#a_e.buffer),
            this.#a_e.bufferSize = _0x5c3737 + 0x1,
            this.#a_e.buffer = this._malloc(this.#a_e.bufferSize)),
            this.#_0x309f86(_0x37c280, this.#a_e.buffer, this.#a_e.bufferSize),
            this.#a_e.buffer;
    }

    #a_b(a) {
        if (parent.wasmTrace) console.log('%c [TRACE]', 'color: #FFA500;', 'A / B - Return Eval');
        const decoded = this.#decodeParam(a);

        // if (decoded.includes('Game.currentGame.network.connected')) return 0;
        if (decoded.includes('Game.currentGame.world.myUid')) return 0;
        if (decoded.includes('document.getElementById("hud").children.length')) return 24;

        return 0x0 | parent.eval(decoded);
    }

    #a_c() {
        if (parent.wasmTrace) console.log('%c [TRACE]', 'color: #FFA500;', 'A / C - Return Page load');
        return performance.now();
    }

    #a_d() {
        if (parent.wasmTrace) console.log('%c [TRACE]', 'color: #FFA500;', "a_a fatal error");
    }

    #a_e(a, b, c) {
        if (parent.wasmTrace) console.log('%c [TRACE]', 'color: #FFA500;', 'A / E - Memory Copy');
        this.HEAPU8.copyWithin(a, b, b + c)
    }

    #a_f(a) {
        if (parent.wasmTrace) console.log('%c [TRACE]', 'color: #FFA500;', 'A / F - Memory Grow');

        a >>>= 0x0;
        const _0x4ec8ab = 0x80000000;

        if (a > _0x4ec8ab) return false;

        for (let i = 1; i <= 4; i *= 2) {
            let _0x2c9c55 = this.HEAPU8.length * (0x1 + 0.2 / i);
            _0x2c9c55 = Math.min(_0x2c9c55, a + 0x6000000);

            const _0x21150c = Math.min(_0x4ec8ab, this.#_0x22cf5c(Math.max(0x1000000, a, _0x2c9c55), 0x10000));
            const _0x542766 = this.#grow(_0x21150c);

            if (_0x542766) return true;
        }
        return false;
    }

    init() {
        return new Promise(async resolve => {
            const imports = {
                a: {
                    a: (...args) => this.#a_a(...args),
                    b: (...args) => this.#a_b(...args),
                    c: (...args) => this.#a_c(...args),
                    d: (...args) => this.#a_d(...args),
                    e: (...args) => this.#a_e(...args),
                    f: (...args) => this.#a_f(...args)
                }
            }

            fetch('asset/zombs_wasm.wasm').then(async buffer => {
                const bytes = await buffer.arrayBuffer();
                const module = await WebAssembly.instantiate(bytes, imports);

                this.memory = module.instance.exports.g;
                this.#instantiateHeap(this.memory.buffer);
                this.table = module.instance.exports.h;

                this.___wasm_call_ctors = module.instance.exports.i;
                this._main = module.instance.exports.j;
                this._MakeBlendField = module.instance.exports.k;
                this.stackSave = module.instance.exports.l;
                this.stackRestore = module.instance.exports.m;
                this.stackAlloc = module.instance.exports.n;
                this._malloc = module.instance.exports.o;
                this._free = module.instance.exports.p;

                this.#instantiateWasm();

                console.log('%c [WASM]', 'color: #ffff00', 'WebAssembly instantiated');
                resolve();
            });
        });
    }

    #instantiateWasm() {
        this.___wasm_call_ctors();

        let arr = [];
        let length = arr.length + 1;

        let alloc = this.stackAlloc(4 * (length + 1));
        this.HEAP32[alloc >> 2] = this.#getAlloc('./this.program');

        for (let i = 1; i < length; i++)
            this.HEAP32[(alloc >> 2) + i] = this.#getAlloc(arr[i - 1]);

        this.HEAP32[(alloc >> 2) + length] = 0x0;

        try {
            this._main(length, alloc)
        } catch (e) {
            if (parent.wasmTrace) console.log('%c [TRACE]', 'color: #FFA500;', '_main stack error')
        }
    }

    #instantiateHeap(buffer) {
        this.HEAP8 = new Int8Array(buffer);
        this.HEAP16 = new Int16Array(buffer);
        this.HEAP32 = new Int32Array(buffer);
        this.HEAPU8 = new Uint8Array(buffer);
        this.HEAPU16 = new Uint16Array(buffer);
        this.HEAPU32 = new Uint32Array(buffer);
        this.HEAPF32 = new Float32Array(buffer);
        this.HEAPF64 = new Float64Array(buffer);
    }

    #getAlloc(_0x49404f) {
        const _0x4fd158 = this.#_0x31ce17(_0x49404f) + 0x1;
        const alloc = this.stackAlloc(_0x4fd158);

        this.#_0x722087(_0x49404f, this.HEAP8, alloc, _0x4fd158);
        return alloc;
    }

    #_0x31ce17(_0x10db1a) {
        let _0x502ddd = 0;
        for (let i = 0; i < _0x10db1a.length; ++i) {
            let _0x4c7b50 = _0x10db1a.charCodeAt(i);

            _0x4c7b50 >= 0xd800 && _0x4c7b50 <= 0xdfff && (_0x4c7b50 = 0x10000 + ((0x3ff & _0x4c7b50) << 0xa) | 0x3ff & _0x10db1a.charCodeAt(++i));
            _0x4c7b50 <= 0x7f ? ++_0x502ddd : _0x502ddd += _0x4c7b50 <= 0x7ff ? 0x2 : _0x4c7b50 <= 0xffff ? 0x3 : 0x4;
        }
        return _0x502ddd;
    }

    #_0x722087(_String, _Memory, _Address, _Offset) {
        if (!(_Offset > 0x0)) return 0x0;

        const _Start = _Address;
        const _Limit = _Address + _Offset - 0x1;

        for (let i = 0x0; i < _String.length; ++i) {
            let _CurrentChar = _String.charCodeAt(i);
            if (_CurrentChar >= 0xd800 && _CurrentChar <= 0xdfff) {
                const _NextChar = _String.charCodeAt(++i);
                _CurrentChar = 0x10000 + ((0x3ff & _CurrentChar) << 0xa) | 0x3ff & _NextChar;
            }
            if (_CurrentChar <= 0x7f) {
                if (_Address >= _Limit)
                    break;
                _Memory[_Address++] = _CurrentChar;
            } else {
                if (_CurrentChar <= 0x7ff) {
                    if (_Address + 0x1 >= _Limit)
                        break;
                    _Memory[_Address++] = 0xc0 | _CurrentChar >> 0x6;
                    _Memory[_Address++] = 0x80 | 0x3f & _CurrentChar;
                } else {
                    if (_CurrentChar <= 0xffff) {
                        if (_Address + 0x2 >= _Limit)
                            break;
                        _Memory[_Address++] = 0xe0 | _CurrentChar >> 0xc;
                        _Memory[_Address++] = 0x80 | _CurrentChar >> 0x6 & 0x3f;
                        _Memory[_Address++] = 0x80 | 0x3f & _CurrentChar;
                    } else {
                        if (_Address + 0x3 >= _Limit)
                            break;
                        _Memory[_Address++] = 0xf0 | _CurrentChar >> 0x12;
                        _Memory[_Address++] = 0x80 | _CurrentChar >> 0xc & 0x3f;
                        _Memory[_Address++] = 0x80 | _CurrentChar >> 0x6 & 0x3f;
                        _Memory[_Address++] = 0x80 | 0x3f & _CurrentChar;
                    }
                }
            }
        }

        _Memory[_Address] = 0x0;
        return _Address - _Start;
    }

    #_0x22cf5c(_0x105af5, _0x43e4dd) {
        _0x105af5 % _0x43e4dd > 0x0 && (_0x105af5 += _0x43e4dd - _0x105af5 % _0x43e4dd)
        return _0x105af5;
    }

    #decodeParam(_0x69fd2, _0x27b2ce) {
        return _0x69fd2 ? this.#_0x5ea49f(this.HEAPU8, _0x69fd2, _0x27b2ce) : '';
    }

    #_0x5ea49f(_0x588906, _0x3fa574, _0x3f49df) {
        for (var _0x384bd6 = _0x3fa574 + _0x3f49df, _0x64e5ec = _0x3fa574; _0x588906[_0x64e5ec] && !(_0x64e5ec >= _0x384bd6);)
            ++_0x64e5ec;
        if (_0x64e5ec - _0x3fa574 > 0x10 && _0x588906.subarray && this.textEncoder)
            return this.textEncoder.decode(_0x588906.subarray(_0x3fa574, _0x64e5ec));
        for (var _0x23f3f3 = ''; _0x3fa574 < _0x64e5ec;) {
            var _0x322e91 = _0x588906[_0x3fa574++];
            if (0x80 & _0x322e91) {
                var _0x393a0f = 0x3f & _0x588906[_0x3fa574++];
                if (0xc0 != (0xe0 & _0x322e91)) {
                    var _0x1093d2 = 0x3f & _0x588906[_0x3fa574++];
                    if (_0x322e91 = 0xe0 == (0xf0 & _0x322e91) ? (0xf & _0x322e91) << 0xc | _0x393a0f << 0x6 | _0x1093d2 : (0x7 & _0x322e91) << 0x12 | _0x393a0f << 0xc | _0x1093d2 << 0x6 | 0x3f & _0x588906[_0x3fa574++], _0x322e91 < 0x10000)
                        _0x23f3f3 += String.fromCharCode(_0x322e91);
                    else {
                        var _0xca855 = _0x322e91 - 0x10000;
                        _0x23f3f3 += String.fromCharCode(0xd800 | _0xca855 >> 0xa, 0xdc00 | 0x3ff & _0xca855);
                    }
                } else
                    _0x23f3f3 += String.fromCharCode((0x1f & _0x322e91) << 0x6 | _0x393a0f);
            } else
                _0x23f3f3 += String.fromCharCode(_0x322e91);
        }
        return _0x23f3f3;
    }

    #_0x309f86(_0x483075, _0x3a8ac4, _0x4179e5) {
        return this.#_0x722087(_0x483075, this.HEAPU8, _0x3a8ac4, _0x4179e5);
    }

    #grow(_0x159464) {
        try {
            this.memory.grow(_0x159464 - this.memory.buffer.byteLength + 0xffff >>> 0x10)
            this.#instantiateHeap(this.memory.buffer);

            return 1;
        } catch (e) {
            if (parent.wasmTrace) console.log('%c [TRACE]', 'color: #FFA500;', 'grow stack error')
        }
    }
}

self.wasm = new WAssembly();
`);
            await this.contentWindow.wasm.init();
            return resolve({wasm: this.contentWindow.wasm, iframeId: iframeId, removeWasm: removeWasm});
        })
    });
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function forRandom(array) {
    let arr = [];
    while (array.length > 0) {
        let index = Math.floor(Math.random() * array.length);
        arr.push(array[index]);
        array.splice(index, 1);
    }
    return arr;
}

/* class socketPool {
    constructor(l = 8) {
        this.pool = {};
        this.setDefault = (length) => {
            for (let i = 1; i <= length; i++) this.pool[i] = [];
        }
        this.setDefault(l);
    }
    assignPool(id) {
        for (let i in this.pool) {
            if (this.pool[i].length < 4) {
                this.pool[i].push(id);
                window.allSockets[id].pool = { index: i, pool: this.pool[i] };
                break;
            }
        }
    }
    assignAll() {
        this.setDefault(8);
        let ids = [];
        for (let i = 0; i < window.allSockets.length; i++) ids.push(i);
        for (let i of forRandom(ids)) this.assignPool(i);
    }
    assignTargetPool(pool) {
        const poolTarget = {x: rng(1000, 23000) / 24 * 24, y: rng(1000, 23000) / 24 * 24};
        for (let ws of this.pool[pool]) window.allSockets[ws].targetPos = poolTarget;
    }
    removePool(pool) {
        if (this.pool[pool] !== undefined) delete this.pool[pool];
    }
    addPool(pool) {
        if (this.pool[pool] == undefined) this.pool[pool] = [];
    }
}

window.pool = new socketPool();

window.triggerFasterAutoBuy = () => {
    window.fasterBuySpear = true;
    pool.assignAll();
    for (let i of window.allSockets) {
        i.isCloseToTarget = false;
        i.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: window.allSockets[i.pool.pool[0]].psk.response.partyShareKey});
    }
    for (let _pool in pool.pool) pool.assignTargetPool(_pool);
} */

class poolHandler {
    constructor(amount) {
        this.parent = {};
        this.setLength = function(l = 8) {
            for (let i = 1; i <= l; i++) this.parent[i] = { index: i, pool: [] };
        }
        this.setLength(amount);
    }
    assignPool(items, pool) {
        for (let item of items) {
            if (this.parent[pool].pool.length < 4) {
                this.parent[pool].pool.push(item);
                window.allSockets[item].pool = this.parent[pool];
                break;
            }
        }
    }
    assignAll() {
        let ids = [];
        let pool = 1;
        for (let i = 0; i < window.allSockets.length; i++) {
            ids.push(i);
            if (ids.length == 4) {
                let arr = forRandom(ids);
                this.assignPool(arr, pool);
                pool++;
            }
        }
    }
}

let pHandler;

game.ui.components.Chat.sendMessage2 = game.ui.components.Chat.sendMessage;
game.ui.components.Chat.sendMessage = (msg) => {
    function explicitSwitch(msg) {
        if (msg.includes("!up") && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(Number(msg[3])) + 1 >= 1) {
            const towerOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(Number(msg[3]));
            const towerType = ['Harvester', 'Wall', 'Door', 'SlowTrap', 'ArrowTower', 'CannonTower', 'MeleeTower', 'BombTower', 'MagicTower', 'GoldMine'][towerOrder];
            if (msg.slice(4) == "/all" || msg.slice(4) == "") {
                for (let i in window.allSockets) {
                    let ws = window.allSockets[i];
                    for (let i in ws.buildings) {
                        if (ws.buildings[i].type == towerType) ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid});
                    }
                }
            } else if (msg[4] == "/" && Number(msg.slice(5)) <= window.allSockets.length) {
                let ws = window.allSockets[Number(msg.slice(5)) - 1];
                for (let i in ws.buildings) {
                    if (ws.buildings[i].type == towerType) ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid});
                }
            }
        }
        if (msg.includes("!initPool")) {
            if (Number(msg.slice(10))) pHandler = new poolHandler(Number(msg.slice(10)));
            else pHandler = new poolHandler(Math.floor(window.allSockets.length / 4) * 4);
        }
        if (msg.slice(0, 8) == "!addPool") {
            if (Number(msg.slice(9))) {
                for (let i of pHandler.parent[Number(msg.slice(9))].pool) {
                    let ws = window.allSockets[i];
                    ws.targetPos = game.ui.playerTick.position;
                    ws.fasterBuySpear = true;
                }
            }
        }
        if (msg.slice(0, 6) == "!break") {
            const targetSocket = window.allSockets[Number(msg.slice(7)) - 1];
            if (targetSocket) targetSocket.breakOut = true;
        }
        if (msg.slice(0, 7) == "!!break") {
            const targetSocket = window.allSockets[Number(msg.slice(8)) - 1];
            if (targetSocket) targetSocket.breakOut = false;
        }
        else {
            game.ui.components.Chat.sendMessage2(msg);
        }
    }
    switch(msg) {
        case "!luid":
            for (let i of game.ui.components.Leaderboard.leaderboardData) {
                game.ui.components.PopupOverlay.showHint("Please check console!");
                console.log(`${i.rank + 1}# - ${i.name}: ${i.uid}`);
            }
            break;
        case "!assignAll":
            pHandler.assignAll();
            break;
        case "!coloralt":
            document.getElementById("coloralt").click();
            break;
        case "!resetcolor":
            window.resetColor();
            break;
        case "!server":
            game.ui.components.PopupOverlay.showHint(`Server has been up since: ${new Date(Date.now() - game.world.replicator.serverTime)}`);
            break;
        case "!ar":
            options.ar = true;
            break;
        case "!dar":
            options.ar = false;
            break;
        case "!rwp":
            options.rwp = true;
            break;
        case "!drwp":
            options.rwp = false;
            break;
        default:
            explicitSwitch(msg);
    };
    /*
     * it doesnt work wtf
     * setTimeout(game.ui.components.Chat.cancelTyping(), 0);
     * game.ui.components.Chat.onMessageInputBlur();
     */
};

window.sendWs = async() => {

    /*
  let socketLocation;
  const req = new XMLHttpRequest();
  req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          socketLocation = req.responseText.split('\n')[8].split('=')[1];
          (!window.locationList[socketLocation]) ? window.locationList[socketLocation] = 1 : window.locationList[socketLocation]++;
      }
  };
  req.open("GET", "http://zombs.io/cdn-cgi/trace", true);
  req.send();
  if (window.locationList[socketLocation] >= 8) return game.ui.components.PopupOverlay.showHint(`Found location has been used to send over 8 times.`);
  */

    let mousePosition3;
    let isTrue = true;
    let altElem = document.createElement('div');
    let altDisplay = document.createElement("p");

    let { wasm, iframeId, removeWasm } = await fetchWasm();
    let isWasmDestroyed = false;

    let ws = new WebSocket(`ws://${game.options.servers[game.options.serverId].hostname}:80`);
    ws.binaryType = "arraybuffer";

    window.allSockets.push(ws);
    ws.cloneId = window.allSockets.length;

    ws.targetPos = {x: 0, y: 0};
    ws.aimingYaw = 1;

    function buildBaseFromStr(design) {
        const towers = design.split(";");

        for (let towerStr of towers) {
            const tower = towerStr.split(",");

            if (tower[0] === "") continue;

            ws.network.sendRpc({
                name: "MakeBuilding",
                type: towerCodes[parseInt(tower[0])],
                x: ws.goldStash.x - parseInt(tower[1]),
                y: ws.goldStash.y - parseInt(tower[2]),
                yaw: parseInt(tower[3])
            });
        };
    };

    ws.fasterBuySpear = false;
    ws.isCloseToTarget = false;

    ws.breakOut = false;
    ws.isOnControl = true;

    ws.moveOption = document.querySelector("#autoMoveOptions").value;

    ws.onclose = () => {
        ws.isclosed = true;
        if (!isWasmDestroyed) removeWasm();

        altElem.remove();
        altDisplay.innerHTML = `Socket #${ws.cloneId}, State: <strong style="color: red;">[Closed]</strong>`;

        // console.log(`%c [SOCKET #${ws.cloneId}]`, 'color: #54ebd9', 'Socket closed');
        // window.locationList[socketLocation]--;
    }

    ws.onopen = () => {
        ws.network = new game.networkType();
        const imposter = {5: [], 6: []};
        ws.network.codec.decodePreEnterWorldResponse = function (preEnterWorld) {
            wasm._MakeBlendField(0x18, 0x84);
            for (var _228 = wasm._MakeBlendField(228, preEnterWorld.remaining()),
                 _count = 0x0; preEnterWorld.remaining();) {
                 wasm.HEAPU8[_228 + _count] = preEnterWorld.readUint8();
                 _count++;
            }
            wasm._MakeBlendField(172, 0x24);
            for (var enterWorld = wasm._MakeBlendField(0x4, 0x98),
                 extra = new ArrayBuffer(0x40),
                 _64 = new Uint8Array(extra),
                 count = 0x0; count < 0x40; count++) _64[count] = wasm.HEAPU8[enterWorld + count];
            imposter['5'] = [..._64];
            return {
                extra: extra
            };
        };

        ws.network.codec.encodeEnterWorld2 = function(buffer) {
            var _0x4f5914 = wasm._MakeBlendField(187, 22);
            for (var i = 0; i < 16; i++) {
                imposter['6'].push(wasm.HEAPU8[_0x4f5914 + i]);
                buffer.writeUint8(wasm.HEAPU8[_0x4f5914 + i]);
            }
            new bProxy().postAnalyzingData(JSON.stringify(imposter));
        }

        ws.network.onEnterWorld = function(data) {
            console.log('MBF 4', data);
            if (data.allowed) {
                ws.uid = data.uid;
                ws.players = {};
                ws.inventory = {};
                ws.buildings = {};
                ws.parties = {};
                ws.lb = {};
                ws.playerUid = game.world.getMyUid();

                this.sendPacket(6, {});
                console.log('MBF 6');

                console.log(`%c [SOCKET #${ws.cloneId}]`, 'color: #54ebd9', `${data.players + 1}/32 players`);

                this.sendRpc({name: "BuyItem", itemName: "PetCARL", tier: 1});
                this.sendRpc({name: "BuyItem", itemName: "PetMiner", tier: 1});

                this.sendInput({left: 1, up: 1});
                this.initControls();
            } else {
                console.log(`%c [SOCKET #${ws.cloneId}]`, 'color: #54ebd9', `32/32 players`);

                altDisplay.id = `alt${ws.cloneId}`;
                altDisplay.innerHTML = `Socket #${ws.cloneId}, State: <strong style="color: red;">[Population Full]</strong>`;
                document.getElementById("altstate").appendChild(altDisplay);
            }
            removeWasm();
            isWasmDestroyed = true;
        }
        ws.network.initControls = function() {
            ws.mouseUp = 1;
            ws.mouseDown = 0;
            ws.f = false;
            function mouseMoved(e, x, y, d) {
                ws.aimingYaw = e;
                if (ws.mouseDown && !ws.mouseUp) {
                    ws.network.sendInput({mouseMovedWhileDown: e, worldX: x, worldY: y, distance: d});
                }
                if (!ws.mouseDown && ws.mouseUp) {
                    ws.network.sendInput({mouseMoved: e, worldX: x, worldY: y, distance: d});
                }
            }
            document.addEventListener('mousemove', mousemove => {
                if (ws.isOnControl) {
                    if (!ws.isclosed) {
                        mousePosition3 = game.renderer.screenToWorld(mousemove.clientX, mousemove.clientY);
                        if (ws.myPlayer) {
                            if (ws.myPlayer.position) {
                                mouseMoved(
                                    game.inputPacketCreator.screenToYaw(
                                        (-ws.myPlayer.position.x + mousePosition3.x) * 100,
                                        (-ws.myPlayer.position.y + mousePosition3.y) * 100
                                    ),
                                    Math.floor(mousePosition3.x),
                                    Math.floor(mousePosition3.y),
                                    Math.floor(game.inputPacketCreator.distanceToCenter(
                                        (-ws.myPlayer.position.x + mousePosition3.x) * 100,
                                        (-ws.myPlayer.position.y + mousePosition3.y) * 100
                                    ) / 100)
                                );
                            }
                        }
                    }
                }
            })
            let SendRpc = ws.network.sendRpc;
            let SendInput = ws.network.sendInput;
            document.addEventListener('keydown', e => {
                if (!ws.isclosed && ws.isOnControl) {
                    if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                        if (e.keyCode == 81) {
                            setTimeout(() => {
                                var nextWeapon = 'Pickaxe',
                                    weaponOrder = ['Pickaxe', 'Spear', 'Bow', 'Bomb'],
                                    foundCurrent = false;
                                for (let i in weaponOrder) {
                                    if (foundCurrent) {
                                        if (ws.inventory[weaponOrder[i]]) {
                                            nextWeapon = weaponOrder[i];
                                            break;
                                        }
                                    }
                                    else if (weaponOrder[i] == ws.myPlayer.weaponName) {
                                        foundCurrent = true;
                                    }
                                }
                                ws.network.sendRpc({name: 'EquipItem', itemName: nextWeapon, tier: ws.inventory[nextWeapon].tier});
                            }, 100);
                        }
                        if (e.keyCode == 72) {
                            ws.network.sendRpc({name: 'LeaveParty'});
                        }
                        if (e.keyCode == 74) {
                            ws.network.sendRpc({name: 'JoinPartyByShareKey', partyShareKey: game.ui.playerPartyShareKey});
                        }

                        if (e.keyCode == 32) {
                            setTimeout(() => {
                                ws.network.sendInput({space: 0});
                                ws.network.sendInput({space: 1});
                            }, 100);
                        }
                        if (e.keyCode == 82) {
                            for (let i in game.ui.buildings) {
                                if (game.ui.components.BuildingOverlay.shouldUpgradeAll && game.ui.buildings[i].type == game.ui.components.BuildingOverlay.buildingId && game.ui.buildings[i].tier == game.ui.components.BuildingOverlay.buildingTier) {
                                    ws.network.sendRpc({name: "UpgradeBuilding", uid: game.ui.buildings[i].uid});
                                }
                            }
                        }
                        if (e.keyCode == 82) {
                            if (!game.ui.components.BuildingOverlay.shouldUpgradeAll && game.ui.components.BuildingOverlay.buildingUid) {
                                ws.network.sendRpc({name: "UpgradeBuilding", uid: game.ui.components.BuildingOverlay.buildingUid});
                            }
                        }
                        if (e.keyCode == 89) {
                            if (!game.ui.components.BuildingOverlay.shouldUpgradeAll && game.ui.components.BuildingOverlay.buildingId !== "GoldStash" && game.ui.components.BuildingOverlay.buildingUid) {
                                ws.network.sendRpc({name: "DeleteBuilding", uid: game.ui.components.BuildingOverlay.buildingUid})
                            }
                        }
                        if (!ws.automove) {
                            // numpad
                            if (e.keyCode == 104 || e.keyCode == 98) ws.network.sendInput({up: e.keyCode == 104 ? 1 : 0, down: e.keyCode == 98 ? 1 : 0});
                            if (e.keyCode == 102 || e.keyCode == 100) ws.network.sendInput({right: e.keyCode == 102 ? 1 : 0, left: e.keyCode == 100 ? 1 : 0});

                            // wasd
                            if (e.keyCode == 87 || e.keyCode == 83) ws.network.sendInput({up: e.keyCode == 87 ? 1 : 0, down: e.keyCode == 83 ? 1 : 0});
                            if (e.keyCode == 68 || e.keyCode == 65) ws.network.sendInput({right: e.keyCode == 68 ? 1 : 0, left: e.keyCode == 65 ? 1 : 0});
                        }
                        if (e.keyCode == 82) { // key R (wtf)
                            ws.network.sendRpc({name: "BuyItem", itemName: "HealthPotion", tier: 1})
                            ws.network.sendRpc({name: "EquipItem", itemName: "HealthPotion", tier: 1})
                        }
                        if (e.keyCode == 78) { // key N
                            ws.network.sendRpc({
                                "name": "EquipItem",
                                "itemName": "PetCARL",
                                "tier": ws.inventory.PetCARL.tier
                            })
                        }
                        if (e.keyCode == 77) { // Key M
                            ws.network.sendRpc({
                                "name": "BuyItem",
                                "itemName": "PetRevive",
                                "tier": 1
                            })
                            ws.network.sendRpc({
                                "name": "EquipItem",
                                "itemName": "PetRevive",
                                "tier": 1
                            })
                            ws.network.sendRpc({
                                "name": "BuyItem",
                                "itemName": "PetCARL",
                                "tier": ws.inventory.PetCARL.tier + 1
                            })
                            ws.network.sendRpc({
                                "name": "BuyItem",
                                "itemName": "PetMiner",
                                "tier": ws.inventory.PetMiner.tier + 1
                            })
                        }
                        if (e.keyCode == 221) { // key ]
                            game.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: ws.psk.response.partyShareKey})
                        }
                    }
                }
            })
            document.addEventListener('keyup', e => {
                if (!ws.isclosed) {
                    if (ws.isOnControl) {
                        if (document.activeElement.tagName.toLowerCase() !== "input" && document.activeElement.tagName.toLowerCase() !== "textarea") {
                            if (!ws.automove) {
                                if (e.keyCode == 104) {
                                    ws.network.sendInput({up: 0});
                                }
                                if (e.keyCode == 102) {
                                    ws.network.sendInput({right: 0});
                                }
                                if (e.keyCode == 98) {
                                    ws.network.sendInput({down: 0});
                                }
                                if (e.keyCode == 100) {
                                    ws.network.sendInput({left: 0});
                                }
                                if (e.keyCode == 87) {
                                    ws.network.sendInput({up: 0});
                                }
                                if (e.keyCode == 68) {
                                    ws.network.sendInput({right: 0});
                                }
                                if (e.keyCode == 83) {
                                    ws.network.sendInput({down: 0});
                                }
                                if (e.keyCode == 65) {
                                    ws.network.sendInput({left: 0});
                                }
                            }
                            if (e.keyCode == 187) {
                                ws.activebow = !ws.activebow;
                                ws.playerWeapon = ws.myPlayer.weaponName;
                                if (ws.activebow) {
                                    if (ws.inventory.Bow) {
                                        ws.network.sendRpc({name: "EquipItem", itemName: "Bow", tier: ws.inventory.Bow.tier})
                                    } else {
                                        ws.network.sendRpc({name: "BuyItem", itemName: "Bow", tier: 1})
                                        ws.network.sendRpc({name: "EquipItem", itemName: "Bow", tier: 1})
                                    }
                                } else {
                                    ws.network.sendRpc({name: "EquipItem", itemName: ws.playerWeapon, tier: ws.inventory[ws.playerWeapon].tier})
                                }
                            }
                            if (e.keyCode == 188) {
                                if (ws.myPet) {
                                    ws.network.sendRpc({name: "DeleteBuilding", uid: ws.myPet.uid});
                                }
                            }
                        }
                    }
                }
            })
            document.getElementsByClassName("hud")[0].addEventListener("mousedown", function(e) {
                let mouseToWorld = game.renderer.screenToWorld(game.ui.mousePosition.x, game.ui.mousePosition.y);
                if (!ws.isclosed) {
                    if (e.which === 3 && ws.isOnControl) {
                        window.moveaway = true;
                        if (ws.myPlayer.position.y - mouseToWorld.y > 1) {
                            ws.network.sendInput({up: 0})
                        } else {
                            ws.network.sendInput({up: 1})
                        }
                        if (-ws.myPlayer.position.y + mouseToWorld.y > 1) {
                            ws.network.sendInput({down: 0})
                        } else {
                            ws.network.sendInput({down: 1})
                        }
                        if (-ws.myPlayer.position.x + mouseToWorld.x > 1) {
                            ws.network.sendInput({right: 0})
                        } else {
                            ws.network.sendInput({right: 1})
                        }
                        if (ws.myPlayer.position.x - mouseToWorld.x > 1) {
                            ws.network.sendInput({left: 0})
                        } else {
                            ws.network.sendInput({left: 1})
                        }
                    }
                    if (ws.isOnControl) {
                        if (!e.button) {
                            ws.mouseDown = 1;
                            ws.mouseUp = 0;
                            ws.network.sendInput({mouseDown: ws.aimingYaw, worldX: Math.floor(mousePosition3.x), worldY: Math.floor(mousePosition3.y), distance: Math.floor(game.inputPacketCreator.distanceToCenter((-ws.myPlayer.position.x + mousePosition3.x)*100, (-ws.myPlayer.position.y + mousePosition3.y)*100)/100)});
                        }
                    }
                }
            });
            document.getElementsByClassName("hud")[0].addEventListener("mouseup", function(e) {
                if (!ws.isclosed) {
                    if (ws.isOnControl) {
                        if (e.which === 3) {
                            ws.network.sendInput({up: 0, down: 0, right: 0, left: 0});
                            if (window.moveaway === true) window.moveaway = false;
                        }
                        if (!e.button) {
                            ws.mouseUp = 1;
                            ws.mouseDown = 0;
                            ws.network.sendInput({mouseUp: 1, worldX: Math.floor(mousePosition3.x), worldY: Math.floor(mousePosition3.y), distance: Math.floor(game.inputPacketCreator.distanceToCenter((-ws.myPlayer.position.x + mousePosition3.x)*100, (-ws.myPlayer.position.y + mousePosition3.y)*100)/100)});
                        }
                    }
                    if (ws.moveOption == "ecp") {
                        if (e.button == 2) targetPos = game.renderer.screenToWorld(game.ui.mousePosition.x,game.ui.mousePosition.y);
                    }
                }
            });

            let itemArray = ['Pickaxe', 'Spear', 'Bow', 'Bomb', 'HealthPotion', 'PetHealthPotion', 'PetWhistle', /* 'ZombieShield' */];
            let shopItems = ['Pickaxe', 'Spear', 'Bow', 'Bomb', 'ZombieShield'];
            for (let i = 1; i < 6; i++) {
                document.querySelector(`#hud-menu-shop > div.hud-shop-grid > a:nth-child(${i})`).addEventListener('click', () => {
                    !ws.isclosed && ws.network.sendRpc({
                        name: "BuyItem",
                        itemName: shopItems[i - 1],
                        tier: !ws.inventory[`${shopItems[i - 1]}`] ? 1 : ws.inventory[`${shopItems[i - 1]}`].tier + 1
                    });
                })
            }
            for (let i = 0; i < document.querySelectorAll('.hud-toolbar-item').length - 1; i++) {
                document.querySelectorAll('.hud-toolbar-item')[i].addEventListener('click', () => {
                    !ws.isclosed && ws.network.sendRpc({name: "EquipItem", itemName: itemArray[i], tier: ws.inventory[`${itemArray[i]}`].tier});
                })
            }
            document.getElementsByClassName("hud-toolbar-item")[7].addEventListener('click', function() {
                !ws.isclosed && ws.network.sendRpc({name: "BuyItem", itemName: "ZombieShield", tier: ws.inventory.ZombieShield ? (ws.inventory.ZombieShield.tier + 1) : 1});
            });

            document.getElementById("deleteAllAlt").addEventListener('click', () => {
                ws.close();
                altname = ws.cloneId;
            })
            document.getElementById("resp").addEventListener('click', () => {
                ws.network.sendInput({respawn: 1});
            })
            document.getElementById("coloralt").addEventListener('click', () => {
                for (let i of game.renderer.npcs.attachments) {
                    if (i.entityClass === "PlayerEntity" && i.fromTick.uid === ws.uid) {
                        var hexValue = "1234567890abcdef";
                        var hexLength = 6;
                        var hex = "";
                        for (let _i = 0; _i < hexLength; _i++) hex += hexValue[Math.floor(Math.random() * hexValue.length)];
                        let hr = hexToRgb(hex);
                        i.currentModel.nameEntity.setColor(hr[0], hr[1], hr[2]);
                    };
                };
            })
            document.getElementsByClassName("controlon")[0].addEventListener('click', () => {
                ws.isOnControl = true;
            })
            document.getElementsByClassName("controloff")[0].addEventListener('click', () => {
                ws.isOnControl = false;
            })
            document.getElementsByClassName("hud-respawn-btn")[0].addEventListener('click', () => {
                !ws.isclosed && (options.rwp && ws.network.sendInput({respawn: 1}));
            })
        }
        ws.network.sendPing = (t) => ws.network.sendPacket(7, t);
        ws.network.sendInput = (t) => ws.network.sendPacket(3, t);
        ws.network.sendRpc = (t) => ws.network.sendPacket(9, t);
        ws.network.sendPacket = (e, t) => {
            if (!ws.isclosed) {
                const enc = ws.network.codec.encode(e, t);
                ws.send(enc);
            }
        };
    }
    ws.onmessage = (msg) => {
        ws.data = ws.network.codec.decode(msg.data);
        if (ws.data.opcode === 4) ws.network.onEnterWorld(ws.data);
        if (ws.data.opcode === 5) {
            console.log('MBF 5'); altname++;
            ws.network.sendPacket(4, {displayName: `${ws.cloneId}`, extra: ws.data.extra});
            // game.world.myUid = null;

            setTimeout(() => {
                if (ws.data.opcode == 5) {
                    altDisplay.id = `alt${ws.cloneId}`;
                    altDisplay.innerHTML = `Socket #${ws.cloneId}, State: <strong style="color: red;">[Failed Opcode 4]</strong>`;
                    document.getElementById("altstate").appendChild(altDisplay);
                    ws.close();
                };
            }, 5000);
        };
/*
        if (ws.data.opcode === 9) {
            console.log(ws.data);
        };
*/
        if (ws.data.entities) {
            if (window.message == ws.cloneId) {
                game.world.replicator.onEntityUpdate(ws.data);
            }
            if (ws.data.entities[ws.uid].name) {
                ws.myPlayer = ws.data.entities[ws.uid];
            }
            for (let g in ws.myPlayer) {
                if (ws.myPlayer[g] !== ws.data.entities[ws.uid][g] && ws.data.entities[ws.uid][g] !== undefined) {
                    ws.myPlayer[g] = ws.data.entities[ws.uid][g];
                }
            }
            if (ws.myPlayer.petUid) {
                if (ws.data.entities[ws.myPlayer.petUid]) {
                    if (ws.data.entities[ws.myPlayer.petUid].model) {
                        ws.myPet = ws.data.entities[ws.myPlayer.petUid];
                        // AS FAR AS I CAN TELL THE LINE BELOW IS USELESS AS FUCK
                        ws.shouldHealPet = false;
                    }
                }
                for (let g in ws.myPet) {
                    if (ws.data.entities[ws.myPlayer.petUid]) {
                        if (ws.myPet[g] !== ws.data.entities[ws.myPlayer.petUid][g] && ws.data.entities[ws.myPlayer.petUid][g] !== undefined) {
                            ws.myPet[g] = ws.data.entities[ws.myPlayer.petUid][g]
                        }
                    }
                }
            }
            for (let i in ws.data.entities) {
                if (ws.data.entities[i].name) {
                    ws.players[i] = ws.data.entities[i];
                }

                if (ws.data.entities[i].model == "Tree" || ws.data.entities[i].model == "Stone" || ws.data.entities[i].model == "NeutralCamp") {
//                    if (!entityMaps.has(i)) {
//                        entityMaps.add(i);
                        game.world.createEntity(ws.data.entities[i]);
//                    }
                }
            }
            for (let i in ws.players) {
                if (!ws.data.entities[i]) {
                    delete ws.players[i];
                }
                for (let g in ws.players[i]) {
                    if (ws.players[i][g] !== ws.data.entities[i][g] && ws.data.entities[i][g] !== undefined) {
                        ws.players[i][g] = ws.data.entities[i][g];
                    }
                }
                ws.playerTick = ws.players[ws.playerUid];
            }
        }
        if (ws.data.name == "DayCycle") {
            ws.isDay = ws.data.response.isDay;
        }
        if (ws.data.name == "PartyInfo") {
            ws.partyInfo = ws.data.response;
            setTimeout(() => {
                for (let i in ws.partyInfo) {
                    if (ws.partyInfo[i].playerUid == ws.uid && ws.partyInfo[i].isLeader) {
                        ws.network.sendRpc({name: "SetPartyMemberCanSell", uid: game.world.getMyUid(), canSell: 1});
                        ws.network.sendRpc({name: "SetOpenParty", isOpen: 1});
                        setTimeout(() => {
                            ws.network.sendRpc({name: "SetPartyName", partyName: ws.cloneId + ""});
                        }, 1000);
                    }
                }
                if (game.ui.playerPartyId == ws.myPlayer.partyId && game.ui.playerPartyLeader) {
                    game.network.sendRpc({name: "SetPartyMemberCanSell", uid: ws.uid, canSell: 1});
                };
            }, 1750);
        }
        if (ws.data.name == "SetItem") {
            ws.inventory[ws.data.response.itemName] = ws.data.response;
            if (!ws.inventory[ws.data.response.itemName].stacks) {
                delete ws.inventory[ws.data.response.itemName];
            }
        }
        if (ws.data.name == "PartyApplicant") {
            ws.partyApplicant = ws.data.response;
            if (ws.partyApplicant.applicantUid == game.world.getMyUid()) {
                ws.network.sendRpc({name: "PartyApplicantDecide", applicantUid: game.world.getMyUid(), accepted: 1})
            }
        }
        if (ws.data.name == "ReceiveChatMessage") {
            ws.message = ws.data;
/*             if (window.allSockets[ws.cloneId-1]) {
                window.allSockets[ws.cloneId-1] = ws;
            }
            trollers coding 2022 colorised */
            if (ws.message.response.uid == game.world.getMyUid()) {
                if (ws.message.response.message == "c") ws.isOnControl = true;
                if (ws.message.response.message == `c${ws.cloneId}`) ws.isOnControl = true;
                if (ws.message.response.message == "u") ws.isOnControl = false;
                if (ws.message.response.message == `u${ws.cloneId}`) ws.isOnControl = false;
                if (ws.message.response.message == `!psk ${ws.cloneId}`) copyText(`${ws.psk.response.partyShareKey}`);
                if (ws.message.response.message == `!DARKNESSGAY ${ws.cloneId}`) game.ui.components.PopupOverlay.showHint(`${ws.uid} - ${ws.cloneId}`);
                if (ws.message.response.message == `!dc ${ws.cloneId}`) ws.close();
                if (ws.message.response.message == "!s") {
                    document.getElementById("altrss").innerHTML += `<p>${ws.players[ws.uid].name}, W: ${counter(ws.players[ws.uid].wood)}, S: ${counter(ws.players[ws.uid].stone)}, G: ${counter(ws.players[ws.uid].gold)}, ID: ${ws.cloneId};</p>`;
                    setTimeout(() => { document.getElementById("altrss").innerHTML = ""; }, 10000);
                }
                if (ws.message.response.message == "!h") ws.autohi = !ws.autohi;
                if (ws.message.response.message == "!ahrc") ws.ahrc = true;
                if (ws.message.response.message == `!ahrc ${ws.cloneId}`) {
                    game.ui.components.PopupOverlay.showHint(`Turned on AHRC for ${ws.cloneId}`);
                    ws.ahrc = true;
                }
                if (ws.message.response.message == "!!ahrc") ws.ahrc = false;
                if (ws.message.response.message == `!!ahrc ${ws.cloneId}`) {
                    game.ui.components.PopupOverlay.showHint(`Turned off AHRC for ${ws.cloneId}`);
                    ws.ahrc = false;
                }
                if (ws.message.response.message == "!space") {
                    ws.network.sendInput({space: 0});
                    ws.network.sendInput({space: 1});
                }
                if (ws.message.response.message == `${ws.cloneId}`) {
                    ws.network.sendInput({space: 0});
                    ws.network.sendInput({space: 1});
                    ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
                }
                if (ws.message.response.message == "!upgrade") for (let i in ws.buildings) ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid});
                if (ws.message.response.message == "!re") ws.network.sendInput({respawn: 1});
                if (ws.message.response.message == `!re ${ws.cloneId}`) ws.network.sendInput({respawn: 1});
                if (ws.message.response.message == "!upStash") {
                    for (let i in ws.buildings) {
                        if (ws.buildings[i].type == "GoldStash") {
                            ws.network.sendRpc({name: "UpgradeBuilding", uid: ws.buildings[i].uid});
                            break;
                        }
                    }
                }
            }
        }
        if (ws.autohi) {
            if (ws.data.entities) {
                for (let i in ws.data.entities) {
                    if (ws.data.entities[i].name) {
                        ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: `hi ${ws.data.entities[i].name}`});
                    }
                }
            }
        }
        if (ws.data.name == "Leaderboard") {
            for (let i in ws.data.response) ws.lb[ws.data.response[i].rank + 1] = ws.data.response[i];
            if (options.randomParty) ws.network.sendRpc({name: 'JoinPartyByShareKey', partyShareKey: getRandomItem(window.allSockets).psk.response.partyShareKey});
            if (ws.fasterBuySpear && !ws.isCloseToTarget) {
                if (isPointInCircle(ws.targetPos, ws.myPlayer.position, 25)) {
                    ws.isCloseToTarget = true;
                    if (ws.cloneId - 1 == ws.pool.pool[0]) {
                        ws.network.sendRpc({name: 'LeaveParty'});
                        ws.network.sendRpc({
                            name: "MakeBuilding",
                            type: "GoldStash",
                            x: Math.round(ws.targetPos.x / 24) * 24 - 240,
                            y: Math.round(ws.targetPos.y / 24) * 24 + 240,
                            yaw: 0
                        });
                        setTimeout(() => {
                            if (ws.goldStash) {
                                buildBaseFromStr(
                                    '8,96,96,0;8,0,96,0;8,-96,96,0;8,-96,0,0;8,-96,-96,0;8,0,-96,0;8,96,-96,0;8,96,0,0;6,-96,192,0;6,-192,96,0;6,192,-96,0;6,96,-192,0;6,-192,-192,0;6,192,192,0;'
                                );
                            } else {
                                ws.isCloseToTarget = false;
                                /*
                                if (ws.failure.category == "Placement") {
                                    pool.assignTargetPool(ws.pool.index);
                                    for (let i of ws.pool.pool) window.allSockets[i].isCloseToTarget = false;
                                }
                                */
                            }
                        }, 250);
                    } else ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: window.allSockets[ws.pool.pool[0]].psk.response.partyShareKey});
                }
            }
            if (window.autoRaid) {
                if (ws.myPlayer) {
                    if (options.global.closestAlt == ws.uid) {
                        if (Object.values(game.ui.buildings).length > 0) {
                            ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
                        } else {
                            for (let i in window.allSockets) {
                                if (Object.values(window.allSockets[i].buildings).length > 0) {
                                    ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: window.allSockets[i].psk.response.partyShareKey + ""});
                                };
                            }
                        }
                        ws.network.sendInput({space: 0})
                        ws.network.sendInput({space: 1})
                    }
                }
            }
            ws.network.sendPing({nonce: 0});
            ws.network.sendRpc(game.metrics.metrics);
        }
        if (ws.data.name == "Failure") ws.failure = ws.data.response;
        if (ws.space) {
            ws.network.sendInput({space: 0});
            ws.network.sendInput({space: 1});
        }
        if (ws.data.name == "LocalBuilding") {
            for (let i in ws.data.response) {
                ws.buildings[ws.data.response[i].uid] = ws.data.response[i];
                if (ws.buildings[ws.data.response[i].uid].dead) {
                    delete ws.buildings[ws.data.response[i].uid];
                }
            }
            ws.goldStash = Object.values(ws.buildings).find(building => building.type == "GoldStash");
        }
        if (ws.data.name == "PartyShareKey") {
            ws.psk = ws.data;
            altElem.style.display = (ws.psk.response.partyShareKey == game.ui.getPlayerPartyShareKey()) ? "none" : "block";
            if (isTrue) {
                isTrue = false;
                ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: game.ui.getPlayerPartyShareKey()});

                altElem.classList.add('hud-map-player');
                altElem.style.display = "block";
                document.getElementsByClassName('hud-map')[0].appendChild(altElem);

                altDisplay.id = `alt${ws.cloneId}`;
                altDisplay.innerHTML = `Socket #${ws.cloneId}, State: <strong style="color: green;">[Open]</strong>`;
                document.getElementById("altstate").appendChild(altDisplay);
            };
        }
        if (ws.data.name == "Dead") {
            if (options.ar || ws.fasterBuySpear || window.xkey) {
                ws.network.sendInput({respawn: 1});
                if (window.xkey) {
                    setTimeout(() => {
                        ws.network.sendRpc({name: "BuyItem", itemName: "Bomb", tier: 1});
                        ws.network.sendRpc({name: "EquipItem", itemName: "Bomb", tier: 1});
                    }, 250);
                }
            }
            if (window.autoRaid) ws.network.sendRpc({name: 'LeaveParty'});
        }
        if (options.automove && !window.moveaway) {
            let object;
            if (!ws.fasterBuySpear) {
                if (!ws.breakOut) {
                    switch (ws.moveOption) {
                        case "emm": object = game.renderer.screenToWorld(game.ui.mousePosition.x, game.ui.mousePosition.y); break;
                        case "epf": object = game.ui.playerTick.position; break;
                        case "ecp": object = targetPos; break;
                    }
                } else object = game.renderer.screenToWorld(game.ui.mousePosition.x, game.ui.mousePosition.y);
            } else object = ws.targetPos;
            if (ws.myPlayer) {
                if (ws.myPlayer.position) {
                    if (ws.myPlayer.position.y - object.y > 1) {
                        ws.network.sendInput({
                            down: 0
                        })
                    } else {
                        ws.network.sendInput({
                            down: 1
                        })
                    }
                    if (-ws.myPlayer.position.y + object.y > 1) {
                        ws.network.sendInput({
                            up: 0
                        })
                    } else {
                        ws.network.sendInput({
                            up: 1
                        })
                    }
                    if (-ws.myPlayer.position.x + object.x > 1) {
                        ws.network.sendInput({
                            left: 0
                        })
                    } else {
                        ws.network.sendInput({
                            left: 1
                        })
                    }
                    if (ws.myPlayer.position.x - object.x > 1) {
                        ws.network.sendInput({
                            right: 0
                        })
                    } else {
                        ws.network.sendInput({
                            right: 1
                        })
                    }
                }
            }
        }
        if (window.xkey) {
            let myPos = enemyStash;
            if (ws.myPlayer) {
                if (ws.myPlayer.position) {
                    if (1 == 1) {
                        if (ws.myPlayer.position.y - myPos.y > 100) {
                            ws.network.sendInput({
                                down: 0
                            })
                        } else {
                            ws.network.sendInput({
                                down: 1
                            })
                        }
                        if (-ws.myPlayer.position.y + myPos.y > 100) {
                            ws.network.sendInput({
                                up: 0
                            })
                        } else {
                            ws.network.sendInput({
                                up: 1
                            })
                        }
                        if (-ws.myPlayer.position.x + myPos.x > 100) {
                            ws.network.sendInput({
                                left: 0
                            })
                        } else {
                            ws.network.sendInput({
                                left: 1
                            })
                        }
                        if (ws.myPlayer.position.x - myPos.x > 100) {
                            ws.network.sendInput({
                                right: 0
                            })
                        } else {
                            ws.network.sendInput({
                                right: 1
                            })
                        }
                    };
                };
            };
        };
        if (window.shouldStartScript) {
            if (getbosswaves() && getIsZombiesActive() && game.ui.playerPartyMembers.length !== 1) {
                if (inull) {
                    inull = false;
                    ws.network.sendRpc({name: "LeaveParty"});
                    setTimeout(() => { inull = true; }, 250);
                }
            }
            if (ticker.dayTicker < -18 && ticker.dayTicker >= -23 && !ws.isDay && getIsZombiesActive() && game.ui.playerPartyMembers.length !== 1) {
                if (i1) {
                    i1 = false;
                    ws.network.sendRpc({name: "LeaveParty"});
                    setTimeout(() => { i1 = true; }, 250);
                }
            }
            if (!getIsZombiesActive() && game.ui.playerPartyMembers.length !== 4 && !getactiveCommingbosswaves()) {
                if (i2) {
                    i2 = false;
                    ws.network.sendRpc({name: "JoinPartyByShareKey", partyShareKey: Game.currentGame.ui.getPlayerPartyShareKey() + ""});
                    setTimeout(() => { i2 = true; }, 250);
                }
            }
            if (ticker.dayTicker > 18 && ticker.dayTicker <= 23 && getIsZombiesActive() && ws.isDay && game.ui.playerPartyMembers.length !== 4) {
                if (i3) {
                    i3 = false;
                    ws.network.sendRpc({name: "LeaveParty"});
                    setTimeout(() => { i3 = true; }, 250)
                }
            }
        }
        if (ws.data.opcode == 0) {
            if (options.heal) {
                if (ws.myPlayer) {
                    let playerHealth = (ws.myPlayer.health/ws.myPlayer.maxHealth) * 100;
                    if (playerHealth <= 50) {
                        ws.network.sendRpc({name: "BuyItem", itemName: "HealthPotion", tier: 1})
                        ws.network.sendRpc({name: "EquipItem", itemName: "HealthPotion", tier: 1})
                    }
                }
                if (ws.myPet) {
                    let petHealth = (ws.myPet.health/ws.myPet.maxHealth) * 100;
                    if (petHealth <= 70) {
                        ws.network.sendRpc({name: "BuyItem", itemName: "PetHealthPotion", tier: 1})
                        ws.network.sendRpc({name: "EquipItem", itemName: "PetHealthPotion", tier: 1})
                    }
                }
            }
            if (options.spamChat) {
                if (getId('4i2').value === "") {
                    const randomSpamText = [`${garbageGenerator()} BIG RAID ${garbageGenerator()}`, `?verify`, "hi", "ez", "Super Idol的笑容都没你的甜八月正午的阳光都没你耀眼热爱 105 °C的你滴滴清纯的蒸馏水"];
                    const randomSpam = Math.floor(Math.random() * randomSpamText.length);
                    let randomText = randomSpamText[randomSpam];
                    ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: `${randomText}`});
                } else {
                    ws.network.sendRpc({name: "SendChatMessage", channel: "Local", message: `${garbageGenerator()} ${getId('4i2').value} ${garbageGenerator()}`});
                };
            };
            if (window.Join4Tier2Spear === true) {
                if (!ws.inventory.Spear) {
                    ws.network.sendRpc({name: 'JoinPartyByShareKey', partyShareKey: game.ui.playerPartyShareKey});
                    if (ws.myPlayer.gold >= spearCostArray[document.getElementById('speartier').value - 1]) {
                        for (let i = 1; i <= tier; i++) ws.network.sendRpc({name: "BuyItem", itemName: "Spear", tier: i});
                        ws.network.sendRpc({name: "EquipItem", itemName: "Spear", tier: ws.inventory.Spear.tier});
                        ws.network.sendRpc({name: 'LeaveParty'});
                    };
                    /*
                } else {
                    if (ws.inventory.Spear.tier < document.getElementById('speartier').value) {
                        ws.network.sendRpc({name: 'JoinPartyByShareKey', partyShareKey: game.ui.playerPartyShareKey});
                        // calculating total spear price
                        let totalPrice =+ game.ui.itemSchema.Spear.goldCosts[ws.inventory.Spear.tier];
                        let priceLoop = () => {
                            let i = 1;
                            totalPrice + game.ui.itemSchema.Spear.goldCosts[ws.inventory.Spear.tier + i];
                            ++i;
                            if (i < document.getElementById('speartier').value) {
                                setTimeout(() => priceLoop, 50);
                            } else {
                                Promise.resolve();
                            }
                        }
                        priceLoop();
                        if ()
                    }
                    }
                    */
                }
            };
            if (ws.ahrc) {
                for(let uid in ws.buildings) {
                    let obj = ws.buildings[uid];
                    if (obj.type == "Harvester") {
                        let amount = obj.tier * 0.05 - 0.02;
                        ws.network.sendRpc({name: "AddDepositToHarvester", uid: obj.uid, deposit: amount});
                        ws.network.sendRpc({name: "CollectHarvester", uid: obj.uid});
                    };
                };
            };
            if (options.autoAim && window.targets.length > 0) {
                const myPos = ws.myPlayer.position;
                const target = window.targets[0];
                const reversedAim = game.inputPacketCreator.screenToYaw((target.position.x - myPos.x) * 100, (target.position.y - myPos.y) * 100);
                ws.network.sendPacket(3, {mouseMoved: reversedAim});
            }
            if (options.antiAttack) {
                if (ws.myPet) {
                    for (let i in window.allSockets) {
                        if (ws.myPet.lastPetDamageTarget == window.allSockets[i].uid || ws.myPet.lastPetDamageTarget == game.world.getMyUid()) {
                            ws.network.sendRpc({name: "EquipItem", itemName: "PetWhistle", tier: 1});
                        };
                    };
                };
            };
            altElem.style.left = (Math.round(ws.myPlayer?.position.x) / game.world.getWidth() * 100) + '%';
            altElem.style.top = (Math.round(ws.myPlayer?.position.y) / game.world.getHeight() * 100) + '%';
        };
        if (ws.activebow) {
            ws.network.sendInput({space: 0})
            ws.network.sendInput({space: 1})
        };
    };
};

var getIsZombiesActive = function () {
    let isZombiesActive = false;
    for (let i in game.renderer.npcs.attachments) {
        if (game.renderer.npcs.attachments[i].fromTick.model !== "NeutralTier1") {
            if (game.renderer.npcs.attachments[i].fromTick.entityClass == "Npc") {
                isZombiesActive = true;
            }
        }
    }
    return isZombiesActive;
};

var getactiveCommingbosswaves = function () {
    let activeCommingbosswave = false;
    let aftercommingbosswaves = [48, 56, 64, 72, 80, 88, 96, 104, 120];
    for (let i = 0; i < aftercommingbosswaves.length; i++) {
        if (game.ui.playerTick.wave == aftercommingbosswaves[i]) {
            activeCommingbosswave = true;
        }
    }
    return activeCommingbosswave;
};

var getactiveCommingbosswaves2 = function () {
    let activeCommingbosswave = false;
    let aftercommingbosswaves = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 120];
    for (let i = 0; i < aftercommingbosswaves.length; i++) {
        if (game.ui.playerTick.wave == aftercommingbosswaves[i]) {
            activeCommingbosswave = true;
        }
    }
    return activeCommingbosswave;
};

var getbosswaves = function () {
    let activebosswave = false;
    let allbosswaves = [9, 17, 25, 33, 41, 49, 57, 65, 73, 81, 89, 97, 105, 121];
    for (let i = 0; i < allbosswaves.length; i++) {
        if (game.ui.playerTick.wave == allbosswaves[i]) {
            activebosswave = true;
        }
    }
    return activebosswave;
};

// session saver part from eh + jrcc

let sessionElem = document.createElement('optgroup');
sessionElem.innerHTML = `
<option value="ses1">Session 1</option>
<option value="ses2">Session 2</option>
<option value="ses3">Session 3</option>
<option value="ses4">Session 4</option>`;
sessionElem.label = "Sessions";
game.ui.components.Intro.serverElem.appendChild(sessionElem);

let isUsingSession = false,
    sessionId = null;
let sessionUrl = "OutgoingGraciousGames.ayu-bloom.repl.co";

JSON.safeStringify = (obj, indent = 2) => {
    let cache = [];
    const retVal = JSON.stringify(
        obj, (key, value) =>
        typeof value === "object" && value !== null ? cache.includes(value) ? undefined : cache.push(value) && value : value,
        indent
    );
    cache = null;
    return retVal;
};

document.querySelector("#recordSes").addEventListener('change', (e) => {
    if (e.target.checked) {
        sessionId = document.querySelector("#recSesOptions").value;
        isUsingSession = true;
    } else isUsingSession = false;
});

document.querySelector("#recSesOptions").addEventListener('change', (e) => {
    sessionId = e.target.value;
})

function genUUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g, c => (
            c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4
        ).toString(16)
    );
}

const attribute_enums = {
    1: 'attributeMaps',
    2: 'entityTypeNames',
    3: 'rpcMaps',
    4: 'rpcMapsByName',
    5: 'sortedUidsByType',
}

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

                game.network.sendAttribute = function() {
                    for (let attribute in attribute_enums) {
                        const attributeMaps = new dcodeIO.ByteBuffer()
                            .writeUint8(8)
                            .writeUint32(parseInt(attribute))
                            .writeString(JSON.stringify(this.codec[attribute_enums[attribute]]))
                            .flip();
                        sesWs.send(attributeMaps.toArrayBuffer());
                    }
                }

                game.network.codec.decode = function(arrayBuffer) {
                    const copy = arrayBuffer,
                          t = dcodeIO.ByteBuffer.wrap(arrayBuffer, 'utf8', !0),
                          r = t.readUint8();
                    let a;
                    switch(r) {
                        case 5:
                            a = this.decodePreEnterWorldResponse(t);
                            break;
                        case 4:
                            a = this.decodeEnterWorldResponse(t);
                            sesWs.send(arrayBuffer);
                            game.network.sendAttribute();
                            break;
                        case 0:
                            sesWs.send(copy);
                            a = this.decodeEntityUpdate(t);
                            break;
                        case 7:
                            a = this.decodePing();
                            game.network.sendAttribute();
                            break;
                        case 9:
                            a = this.decodeRpc(t);
                            sesWs.send(arrayBuffer);
                            break;
                    }
                    a.opcode = r;
                    return a;
                }
            }
            sesWs.onmessage = (msg) => game.network.socket.send(msg.data);
            sesWs.onclose = e => {
                console.log(e.reason);
                console.log("ws closed");
            };
            game.network.connect2(options);
            return;
        }
        game.network.connected = false;
        game.network.connecting = true;
        game.network.socket = sesWs;
        game.network.bindEventListeners();

        game.network.sendPacket = (opcode, data) => {
            if (opcode === 7 || opcode === 4 || opcode === 6) return;
            game.network.connected && game.network.socket.send(game.network.codec.encode(opcode, data));
        }

        game.network.codec.decode = function(arrayBuffer) {
            const t = dcodeIO.ByteBuffer.wrap(arrayBuffer, 'utf8', !0), r = t.readUint8();
            let a = {};
            let attribute_type;
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
                    attribute_type = t.readUint32();
                    this[attribute_enums[attribute_type]] = JSON.parse(t.readString(t.remaining()));
                    break;
                case 9:
                    a = this.decodeRpc(t);
                    break;
            }
            a.opcode = r;
            return a;
        }
        game.network.onMessage = (msg => {

            const decoded = game.network.codec.decode(msg.data);
            if (decoded.opcode === 5 || decoded.opcode === 7) return;

            game.network.emitter.emit(packet_enum[decoded.opcode], decoded);
        });

        sesWs.onopen = () => sesWs.send(simpleStringEncode(`g/${sessionId}`));
        return;
    };
    game.network.connect2(options);
};







