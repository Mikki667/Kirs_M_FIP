import { VideoPlayer } from "./video-player.js";
import { TattoosApp } from './tattoo-app.js';
import { Contact } from './contact.js';
import { animations } from './animations.js';
import { SmoothScroll } from './smooth-scroll.js';

(() => {
    VideoPlayer();
    TattoosApp();
    Contact();
    animations();
    SmoothScroll();
})();