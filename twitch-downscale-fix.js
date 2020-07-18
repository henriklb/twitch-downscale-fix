// ==UserScript==
// @name         Twitch web video player downscale fix
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  disables the annoying video playback downscaling when a tab is inactive
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
