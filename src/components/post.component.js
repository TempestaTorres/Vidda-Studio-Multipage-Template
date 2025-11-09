import {QParamService} from "../services/qparamService.js";
import {Tags} from "../tags/tags.js";
import {PostRoutes} from "../postRoutes/post.routes";

export class PostComponent {
    constructor(selector) {
        this._postTitleSelector = document.querySelector(selector);
        this._tag = Tags.getRouteByTag(QParamService.getDocumentLocationParam('tag'));
    }
    init() {

        if (this._postTitleSelector && this._tag !== null) {

            this._postTitleSelector.textContent = this._tag.name;

            let postHeading = document.querySelector(".entry-title");

            if (postHeading) {

                postHeading.firstElementChild.textContent = this._tag.blog;
                postHeading.firstElementChild.href = "/blog/" + this._tag.blog;
                postHeading.firstElementChild.addEventListener("click", this.#postLinkClicked.bind(this));

                postHeading.nextElementSibling.href = "/blog/" + this._tag.blog;
                postHeading.nextElementSibling.addEventListener("click", this.#postLinkClicked.bind(this));

                postHeading.nextElementSibling.firstElementChild.src = this._tag.image;
            }
        }
    }
    #postLinkClicked(e) {
        e.preventDefault();

        let route = PostRoutes.getRouteByName(this._tag.blog);

        if (route !== null) {
            window.location = route.route + `?id=${route.id}`;
        }
    }
}
