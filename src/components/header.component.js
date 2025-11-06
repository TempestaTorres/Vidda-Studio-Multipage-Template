import {WidgitsService} from "../services/widgitsService.js";

export class HeaderComponent {

    constructor(responsiveData = 1024) {

        this._responsiveData = responsiveData;
        this._subLinks = document.querySelectorAll('.dropdown-item');
    }
    initialize() {
        WidgitsService.menuToggler();
        WidgitsService.dropdownMenuToggler();
        WidgitsService.megamenuInit(0, this.#navLinkClick);

        if (this._subLinks && this._subLinks.length > 0) {

            this._subLinks.forEach((subLink) => {
                subLink.addEventListener("click", this.#navLinkClick);
            });
        }
    }

    #navLinkClick(e) {

        if (window.innerWidth <= this._responsiveData) {

            WidgitsService.menuToggle(e);
        }
    }
}
