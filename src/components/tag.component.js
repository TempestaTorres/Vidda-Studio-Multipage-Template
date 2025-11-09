import {Tags} from "../tags/tags.js";

export class TagComponent {
    constructor(blogpost) {
        this._tags = document.querySelector(".posts-term");
        this._blogpost = blogpost;
    }
    init() {
        if (this._tags) {

            const tags = Tags.getTagsByBlog(this._blogpost);

            if (tags.length > 0) {

                for (let i = 0; i < tags.length; i++) {

                    let liItem = document.createElement("li");
                    liItem.classList.add("list-term");

                    let a = document.createElement("a");
                    a.href = "/tag/" + tags[i].tag;

                    let span = document.createElement("span");
                    span.className = "meta-text";
                    span.textContent = tags[i].tag.charAt(0).toUpperCase() + tags[i].tag.slice(1);
                    a.appendChild(span);

                    liItem.appendChild(a);


                    a.addEventListener("click", this.#tagOnClick);

                    this._tags.appendChild(liItem);

                    if (i < tags.length - 1) {

                        let liDivider = document.createElement("li");
                        liDivider.classList.add("term-divider");

                        let spanDivider = document.createElement("span");
                        spanDivider.textContent = ",";

                        liDivider.appendChild(spanDivider);

                        this._tags.appendChild(liDivider);

                    }
                }
            }
        }
    }
    #tagOnClick(e) {
        e.preventDefault();

        let tag = e.currentTarget.href.split("tag/")[1];
        let route = null;

        if (tag && tag.length > 0) {

            route = Tags.getRouteByTag(tag);

            if (route !== null) {
                window.location = route.route + `?tag=${tag}`;
            }
        }
    }
}
