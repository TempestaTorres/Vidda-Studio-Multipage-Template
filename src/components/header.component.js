const NAV_BURGER_SELECTOR = ".menu-hamburger";
const NAV_OVERLAY_SELECTOR = ".mobile-menu-overlay";
const NAV_CLOSE_SELECTOR = ".app-button-menu-close";
const NAV_SELECTOR = ".nav-panel";

export class HeaderComponent {

    constructor() {

        this._burger = document.querySelector(NAV_BURGER_SELECTOR);
        this._overlay = document.querySelector(NAV_OVERLAY_SELECTOR);
        this._navClose = document.querySelector(NAV_CLOSE_SELECTOR);
        this._nav = document.querySelector(NAV_SELECTOR);

        if(this._burger) {
            this._burger.addEventListener('click', this.#burgerOnClick.bind(this));
        }
        if(this._navClose) {
            this._navClose.addEventListener('click', this.#navClose.bind(this));
        }

        if(this._overlay) {
            this._overlay.addEventListener('click', this.#navClose.bind(this));
        }
    }

    #burgerOnClick() {

        if (this._overlay) {
            this._overlay.classList.add("active");
        }
        if (this._nav) {
            this._nav.classList.add("open");
        }
    }

    #navClose() {
        if (this._overlay) {
            this._overlay.classList.remove("active");
        }
        if (this._nav) {
            this._nav.classList.remove("open");
        }
    }

}
