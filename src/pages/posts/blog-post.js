import "./blog-post.css";

import scrollObserver from "../../services/scrollObserverService.js";
import {HeaderComponent} from "../../components/header.component.js";
import {FooterComponent} from "../../components/footer.component.js";
import {BlogpostComponent} from "../../components/blogpost.component.js";
import {McModalService} from "../../services/mcmodalService.js";

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {

        const header = new HeaderComponent();
        header.initialize();

        const footer = new FooterComponent();

        scrollObserver(".app-invisible", ["animated", "fadeIn"], { once: true ,
            threshold: 0.1 });

        const blogPost = new BlogpostComponent("#blog-post-title");
        blogPost.init();

        //Modals
        McModalService.activateModalService();

    });
})();
