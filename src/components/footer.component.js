import {ValidationService} from "../services/validationService.js";

const FOOTER_FORM_SELECTOR = ".mf-subscribe";
const FOOTER_INPUT_SELECTOR = "#mf-input-email";
const FOOTER_SUBMIT_BTN_SELECTOR = ".metform-submit-btn";
const FOOTER_RESPONSE_MSG_SELECTOR = ".mf-main-response-wrap";
const FOOTER_FIELD_REQUIRED = "This field is required.";
const FOOTER_FIELD_INVALID = "Invalid email address.";

export class FooterComponent {

    constructor() {

        this._form = document.querySelector(FOOTER_FORM_SELECTOR);
        this._input = document.querySelector(FOOTER_INPUT_SELECTOR);
        this._mfsBtn = document.querySelector(FOOTER_SUBMIT_BTN_SELECTOR);
        this._responseMsg = document.querySelector(FOOTER_RESPONSE_MSG_SELECTOR);

        if (this._responseMsg) {
            this._responseMsg.dataset.show = "0";
        }

        this.errMessage = document.createElement("span");
        this.errMessage.className = "mf-error-message";

        this._timerId = null;

        if (this._form && this._input) {
            this.#init();
        }
    }

    #init() {
        this._form.addEventListener("submit", this.#onSubmit.bind(this));
        this._input.addEventListener("blur", this.#onBlur.bind(this));
        this._input.addEventListener("focus", this.#onFocus.bind(this));
    }
    #onSubmit(e) {
        e.preventDefault();

        if (this._input.value.length > 0) {

            if (ValidationService.emailValidator(this._input)) {

                this._input.setCustomValidity('');
                if (this._input.parentElement.children.length > 1) {
                    this._input.parentElement.removeChild(this.errMessage);
                }

                this.#subscribe();
            }
            else {
                this.errMessage.textContent = FOOTER_FIELD_INVALID;
                this._input.setCustomValidity('invalid');
                this._form.classList.add("was-validated");

                if (this._input.parentElement.children.length === 1)
                    this._input.parentElement.appendChild(this.errMessage);
            }
        }
    }

    #onFocus() {

        if (this._input.parentElement.children.length === 1) {
            this.errMessage.textContent = FOOTER_FIELD_REQUIRED;
            this._input.parentElement.appendChild(this.errMessage);
        }
        this._form.classList.add("was-validated");
    }

    #onBlur() {
        this._form.classList.remove("was-validated");
        this._input.parentElement.removeChild(this.errMessage);
    }

    #subscribe() {
        console.log(this._input.value);

        this._mfsBtn.disabled = true;

        this._timerId = setTimeout(() => {

            this._mfsBtn.disabled = false;
            this._form.reset();

            this.#showMessage();

        }, 3000);
    }

    #showMessage() {
        if (this._responseMsg) {
            this._responseMsg.dataset.show = "1";

            this._timerId = setTimeout(() => {

                this._responseMsg.dataset.show = "0";

            }, 3000);
        }
    }
}
