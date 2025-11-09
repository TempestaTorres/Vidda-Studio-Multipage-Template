import {PostRoutes} from "../postRoutes/post.routes";

export class PostRoutesComponent {
    constructor() {

        this._posts = document.querySelectorAll(".appkit-post-image-card");
    }
    init() {

        if (this._posts) {

            for (let i = 0; i < this._posts.length; i++) {

                let refs = this._posts[i].querySelectorAll(".appkit-entry-thumb");

                if (refs) {

                    let route = PostRoutes.getRouteById(i);
                    if (route) {
                        for (let j = refs.length - 1; j >= 0; j--) {

                            refs[j].href = "/" + route.name;
                            refs[j].dataset.item = route.id;
                            refs[j].addEventListener("click", this.#postOnClick);
                        }
                    }
                }
            }
        }
    }
    #postOnClick(e) {
        e.preventDefault();

        let postId = parseInt(e.currentTarget.dataset.item);

        if (postId !== null && postId !== undefined) {
            let route = PostRoutes.getRouteById(postId);
            if (route) {
                window.location = route.route + `?id=${route.id}`;
            }
        }
    }
}
