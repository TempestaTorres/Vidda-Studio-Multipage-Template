import "../css/about.css";
import scrollObserver from "../../services/scrollObserverService.js";
//import counterObserver from "../../services/counterService.js";
import {HeaderComponent} from "../../components/header.component.js";
import {FooterComponent} from "../../components/footer.component.js";
//import {AccordionService} from "../../services/accordionService.js";

(function() {
    "use strict";

    window.addEventListener("DOMContentLoaded", function() {

        const header = new HeaderComponent();
        header.initialize();

        const footer = new FooterComponent();

        scrollObserver(".app-invisible", ["animated", "fadeIn"], { once: true ,
            threshold: 0.1 });

        //counterObserver(".app-counter-number");

        // Accordion
        //const accordion = new AccordionService();
        //accordion.init();

    });
})();
