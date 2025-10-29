import "./css/app.css"
import {HeaderComponent} from "./components/header.component.js";
import {FooterComponent} from "./components/footer.component.js";

(function() {
    "use strict"

    window.addEventListener("DOMContentLoaded", function() {

        const header = new HeaderComponent();
        const footer = new FooterComponent();

    });
})();
