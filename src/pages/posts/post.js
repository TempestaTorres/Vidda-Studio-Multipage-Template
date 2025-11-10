import "./post.css"

import scrollObserver from "../../services/scrollObserverService.js";
import {HeaderComponent} from "../../components/header.component.js";
import {FooterComponent} from "../../components/footer.component.js";
import {PostComponent} from "../../components/post.component";

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {

        const header = new HeaderComponent();
        header.initialize();

        const footer = new FooterComponent();

        scrollObserver(".app-invisible", ["animated", "fadeIn"], { once: true ,
            threshold: 0.1 });
        // Post
        const post = new PostComponent("#meta-post-title");
        post.init();

    });
})();
