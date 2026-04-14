import { VideoPlayer } from "./video-player.js";
import { TattoosApp } from './tattoo-app.js';
import { Contact } from './contact.js';
import { animations } from './animations.js';
import { SmoothScroll } from './smooth-scroll.js';
import { HeaderMenu } from "./header-menu.js";

(() => {
    VideoPlayer();
    TattoosApp();
    Contact();
    animations();
    SmoothScroll();
    HeaderMenu();
})();