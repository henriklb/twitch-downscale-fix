// ==UserScript==
// @name         Twitch web video player downscale fix
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  disables the annoying video playback downscaling when a tab is inactive
// @author       Slapsy
// @match        https://*.twitch.tv/*
// @match        http://*.twitch.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Object.defineProperty(document, 'hidden', {value: false});
    Object.defineProperty(document, 'visibilityState', {value: 'visible'});
}
)();
