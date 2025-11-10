import {WidgitsService} from "../services/widgitsService.js";
import {NavigationComponent} from "./navigation.component.js";
import {NavigationRoutes} from "../navigationRoutes/navigation.routes";

export class HeaderComponent {

    constructor(responsiveData = 1024) {

        this._responsiveData = responsiveData;
        this._subLinks = null;
        this._menuIndex = null;
    }
    initialize() {

        const navigation = new NavigationComponent();
        navigation.init();

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
    }

    #navLinkClick(e) {

        e.preventDefault();

        console.log("Menu clicked");
        let href = e.currentTarget.attributes.href.value;
        let name = href.slice(1);
        let route = NavigationRoutes.getRouteByName(name);

        if (route !== null && route !== window.location.pathname) {
            window.location = route;
        }

        if (window.innerWidth <= this._responsiveData) {

            WidgitsService.menuToggle(e);
        }
    }
}
