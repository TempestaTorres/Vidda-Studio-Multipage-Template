import "./blog-post.css";

import scrollObserver from "../../services/scrollObserverService.js";
import {HeaderComponent} from "../../components/header.component.js";
import {FooterComponent} from "../../components/footer.component.js";
import {BlogpostComponent} from "../../components/blogpost.component.js";


(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {

        scrollObserver(".app-invisible", ["animated", "fadeIn"], { once: true ,
            threshold: 0.1 });
        const header = new HeaderComponent();
        header.initialize();
        const footer = new FooterComponent();

        const blogPost = new BlogpostComponent("#blog-post-title");
        blogPost.init();

    });
})();
