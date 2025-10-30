import "./css/app.css"
import {HeaderComponent} from "./components/header.component.js";
import {FooterComponent} from "./components/footer.component.js";
import {VideoPlayer} from "./components/video.component.js";

(function() {
    "use strict"

    window.addEventListener("DOMContentLoaded", function() {

        const header = new HeaderComponent();
        const footer = new FooterComponent();
        const videoPlayer = new VideoPlayer('.app-background-video-container', "CL8j01U66aM", "Woman Exercising Stock Footage | Fitness Footage | Yoga Stock Video | Royalty Free Videos");


    });
})();
