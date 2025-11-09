import {QParamService} from "../services/qparamService.js";
import {PostRoutes} from "../postRoutes/post.routes.js";
import {TagComponent} from "./tag.component.js";

const BlogImages = [
        "/images/group-of-women-in-sportswear-practicing-yoga.jpg",
        "/images/women-exercising-with-instructor-in-gym-.jpg",
        "/images/yoga-is-a-work-of-heart-shot-of-a-group-of-young.jpg",
]
export class BlogpostComponent {
    constructor(selector) {
        this._blogpostId = QParamService.getDocumentLocationParam('id');
        this._blogpostTitleSelector = document.querySelector(selector);
        this._postRoute = null;
    }
    init() {
        if (this._blogpostId && this._blogpostTitleSelector) {

            this._postRoute = PostRoutes.getRouteById(parseInt(this._blogpostId));

            if (this._postRoute !== null) {
                this._blogpostTitleSelector.textContent = this._postRoute.name;

                let heroWrapper = document.querySelector(".app-element-blog-post-hero-wrapper");
                if (heroWrapper) {
                    heroWrapper.dataset.post = this._postRoute.id + 1;
                }

                let mainHeading = document.querySelector(".section-main-title");
                if (mainHeading) {
                    mainHeading.textContent = this._postRoute.name;
                }

                let blogImage = document.querySelector(".blog-featureimage");
                if (blogImage) {
                    blogImage.dataset.post = this._postRoute.id + 1;
                    blogImage.firstElementChild.src = BlogImages[this._postRoute.id];
                }

                const tags = new TagComponent(this._postRoute.name);
                tags.init();
            }
        }
    }
}
