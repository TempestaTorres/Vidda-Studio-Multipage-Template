import {WidgitsService} from "../services/widgitsService.js";
import {NavigationComponent} from "./navigation.component.js";
import {NavigationRoutes} from "../navigationRoutes/navigation.routes.js";

export class HeaderComponent {

    constructor(routes = [], responsiveData = 1024) {

        this._responsiveData = responsiveData;
        this._subLinks = null;
        this._menuIndex = null;
        this._routes = routes;
    }
    initialize() {

        const navigation = new NavigationComponent();
        navigation.init();

        if (Array.isArray(this._routes) && this._routes.length > 0) {

            for (let route of this._routes) {
                navigation.setRoute(route.selector, route.name, route.textSelector, this.#navLinkClick);
            }
        }

        WidgitsService.menuToggler();
        WidgitsService.dropdownMenuToggler();

        this._menuIndex = navigation.getCurrentRouteId();

        WidgitsService.megamenuInit(this._menuIndex, this.#navLinkClick);

        this._subLinks = document.querySelectorAll('.dropdown-item');

        if (this._subLinks && this._subLinks.length > 0) {

            this._subLinks.forEach((subLink) => {
                subLink.addEventListener("click", this.#navLinkClick);
            });
        }

        this.setButtonRoute('.footer-home-button', 'Home');
        this.setButtonRoute('.footer-about-button', 'About');
        this.setButtonRoute('.footer-blog-button', 'Blog');
    }

    #navLinkClick(e) {

        e.preventDefault();

        let href = e.currentTarget.attributes.href.value;
        let name = href.slice(1);
        let route = NavigationRoutes.getRouteByName(name);

        if (window.innerWidth <= this._responsiveData) {

            WidgitsService.menuToggle(e);
        }

        if (route !== null && route !== window.location.pathname) {
            window.location = route;
        }

    }
    setButtonRoute(selector, routeName) {
        let item = document.querySelector(selector);

        if (item && item.nodeName === "A") {

            let route = NavigationRoutes.getRouteByName(routeName);

            if (route !== null) {
                item.href = "/" + routeName;
            }

            item.addEventListener("click", this.#navLinkClick);
        }
    }
}
