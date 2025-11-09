import "./css/app.css"
import {HeaderComponent} from "./components/header.component.js";
import {FooterComponent} from "./components/footer.component.js";
import {VideoPlayer} from "./components/video.component.js";
import scrollObserver from "./services/scrollObserverService.js";
import counterObserver from "./services/counterService.js";
import {LightboxComponent} from "./components/lightbox.component.js";
import {PostRoutesComponent} from "./components/postRoutes.component.js";
import {AccordionService} from "./services/accordionService";

(function() {
    "use strict"

    window.addEventListener("DOMContentLoaded", function() {

        scrollObserver(".app-invisible", ["animated", "fadeIn"], { once: true ,
        threshold: 0.1 });

        counterObserver(".app-counter-number");

        const header = new HeaderComponent();
        header.initialize();
        const footer = new FooterComponent();
        const videoPlayer = new VideoPlayer('.app-background-video-container', "home-video-widget-1","CL8j01U66aM", "Woman Exercising Stock Footage | Fitness Footage | Yoga Stock Video | Royalty Free Videos");
        const videoPlayer2 = new VideoPlayer('.app-follow-us-video-container', "home-video-widget-2","4gmV7kPoDgY", "Free Stock Video - People Doing the Warrior Pose in a Yoga Class - VidStock Hub #YogaEmpowerment");
        const lightBox = new LightboxComponent("vYprEI6Q270", ".akit-video-popup-btn");

        const posts = new PostRoutesComponent();
        posts.init();
        // Accordion
        const accordion = new AccordionService();
        accordion.init();

    });

})();
