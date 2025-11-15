import "../css/products.css";
import scrollObserver from "../../services/scrollObserverService.js";
import {HeaderComponent} from "../../components/header.component.js";
import {FooterComponent} from "../../components/footer.component.js";
import {LazyLoadService} from "../../services/lazyloadService.js";
import {McModalService} from "../../services/mcmodalService.js";
import {SwiperComponent} from "../../components/swiper.component.js";

(function() {
    "use strict";

    window.addEventListener("DOMContentLoaded", function() {

        const header = new HeaderComponent([{
            selector: ".app-element-about-hero-nav-link",
            name: "Home",
            textSelector: true,
        }]);
        header.initialize();

        const footer = new FooterComponent();

        scrollObserver(".app-invisible", ["animated", "fadeIn"], { once: true ,
            threshold: 0.1 });

        LazyLoadService.lazyLoadObserver();

        //Modals
        McModalService.activateModalService();

        // Swipers
        const swiper = new SwiperComponent();
        swiper.init();
    });

})();
