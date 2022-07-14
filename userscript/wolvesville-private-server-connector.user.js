// ==UserScript==
// @name         Wolvesville Private Server
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Allows you to connect to a local server instead of the normal prod server (no asia replacement for now)
// @author       Nulled
// @match        https://www.wolvesville.com/
// @grant        none
// @run-at       document-start
// ==/UserScript==

// Change these to connect to a different host
// Needs Socket.io with Websocket transport, doesnt support http long polling for now :)
const PROTOCOL = 'ws';
const PRIV_SERVER = 'localhost'; // domain
const PORT = 8080; // set to null if no port needed

// might use this for later :D
const getURLParams = url => [...new URL(url).searchParams.entries()].reduce((q, [k, v]) => Object.assign(q, {[k]: v}), {});

const _WebSocket = window.WebSocket;
window.WebSocket = function(url) {
    if(!url.startsWith('wss://api-game.wolvesville.com/socket.io/')) return new _WebSocket(url);
    return new _WebSocket(url.replace('wss://api-game.wolvesville.com', PORT ? `${PROTOCOL}://${PRIV_SERVER}:${PORT}` : `${PROTOCOL}://${PRIV_SERVER}`));
}
