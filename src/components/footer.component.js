// import {ValidationService} from "../services/validationService.js";

import {MetformComponent} from "./metform.component.js";

const FOOTER_FORM_SELECTOR = ".mf-subscribe";

export class FooterComponent {

    constructor() {

        this._metformSubscribe = new MetformComponent(FOOTER_FORM_SELECTOR, this.#subscribe.bind(this));

        if (this._metformSubscribe.init()) {
            this._metformSubscribe.setValidator("email", "mf-email");
        }
    }

    #subscribe() {

        this._metformSubscribe.showMessage("Thanks for subscribing!");
    }
}
