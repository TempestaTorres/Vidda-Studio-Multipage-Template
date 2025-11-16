import "../css/404.css";
import scrollObserver from "../../services/scrollObserverService.js";
import {HeaderComponent} from "../../components/header.component.js";
import {FooterComponent} from "../../components/footer.component.js";
import {LazyLoadService} from "../../services/lazyloadService.js";
import {McModalService} from "../../services/mcmodalService.js";

(function() {
    "use strict";

    window.addEventListener("DOMContentLoaded", function() {

        const header = new HeaderComponent([{
            selector: ".app-element-about-hero-nav-link",
            name: "Home",
            textSelector: true,
        }
        ]);
        header.initialize();
        header.setButtonRoute('.app-back-to-home-button', 'Home');

        const footer = new FooterComponent();

        scrollObserver(".app-invisible", ["animated", "fadeIn"], { once: true ,
            threshold: 0.1 });

        LazyLoadService.lazyLoadObserver();

        //Modals
        McModalService.activateModalService();

    });

})();
