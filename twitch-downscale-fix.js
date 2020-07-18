// ==UserScript==
// @name         Slapsy's Downscale fix 2.0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  have fun!
// @author       Slapsy
// @match        https://www.tampermonkey.net/index.php?version=4.9.5941&ext=fire&updated=true
// @match        https://*.twitch.tv/*
// @match        http://*.twitch.tv/*
// @match        https://*.jsbin.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Object.defineProperty(document, 'hidden', {value: false});
    Object.defineProperty(document, 'visibilityState', {value: 'visible'});
}
)();
