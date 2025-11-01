import "./css/app.css"
import {HeaderComponent} from "./components/header.component.js";
import {FooterComponent} from "./components/footer.component.js";
import {VideoPlayer} from "./components/video.component.js";
import scrollObserver from "./services/scrollObserverService.js";

(function() {
    "use strict"

    window.addEventListener("DOMContentLoaded", function() {

        scrollObserver(".app-invisible", ["animated", "fadeIn"], { once: true ,
        threshold: 0.1 });
        const header = new HeaderComponent();
        const footer = new FooterComponent();
        const videoPlayer = new VideoPlayer('.app-background-video-container', "home-video-widget","CL8j01U66aM", "Woman Exercising Stock Footage | Fitness Footage | Yoga Stock Video | Royalty Free Videos");


    });
})();
