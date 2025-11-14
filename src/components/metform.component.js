import {ValidationService} from "../services/validationService";

export class MetformComponent{

    constructor(selector, callback = null, validate = true){

        this.callback = callback;
        this._metform = document.querySelector(selector);
        this._inputs = null;
        this._btnSubmit = null;
        this._responseMsg = null;
        this._errorMsg = null;
        this._validatorMsg = null;
        this._validators = [];
        this._initialized = false;

        if (this._metform && !this._metform.classList.contains("metform-form-content")) {
            this._metform = null;
        }
        if (this._metform) {
            this._inputs = this._metform.querySelectorAll(".mf-input");

            if (this._inputs && this._inputs.length > 0) {

                for (let i = 0, l = this._inputs.length; i < l; i++) {
                    let input = this._inputs[i];

                    input.ariaInvalid = "false";

                    input.addEventListener("focus", this.#onFocus.bind(this));
                    input.addEventListener("blur", this.#onBlur.bind(this));
                }

                this._responseMsg = this._metform.querySelector(".mf-main-response-wrap");

                if (this._responseMsg) {
                    this._responseMsg.dataset.show = "0";
                }

                this._btnSubmit = this._metform.querySelector(".metform-submit-btn");

                if (validate) {
                    this._errorMsg = document.createElement("span");
                    this._errorMsg.className = "mf-error-message";
                    this._errorMsg.textContent = "This field is required.";

                    this._validatorMsg = document.createElement("span");
                    this._validatorMsg.className = "mf-error-message";

                    this._metform.addEventListener("submit", this.#onSubmit.bind(this));
                }

                this._initialized = true;
            }
        }
    }
    init() {
        return this._initialized;
    }

    #onSubmit(e) {
        e.preventDefault();

        if (this.#isValid() && this.#isValidated()) {

            this._btnSubmit.disabled = true;

            setTimeout(() => {

                this._btnSubmit.disabled = false;
                this._metform.reset();

                if (this.callback) {
                    this.callback();
                }

            }, 2000);
        }
    }

    #isValid() {

        let valid = true;

        for (let i = 0, l = this._inputs.length; i < l; i++) {

            let input = this._inputs[i];

            if (input.value.length === 0 && input.attributes.required !== undefined) {
                input.ariaInvalid = "true";
                valid = false;

                if (input.parentElement.firstElementChild.nodeName === "INPUT" && input.parentElement.children.length === 1) {
                    input.parentElement.appendChild(this._errorMsg);
                }
                else if (input.parentElement.firstElementChild.nodeName === "LABEL" && input.parentElement.children.length === 2) {
                    input.parentElement.appendChild(this._errorMsg);
                }
            }
            else if (input.value.length > 0 && input.attributes.required !== undefined) {
                input.ariaInvalid = "false";

                if (input.parentElement.firstElementChild.nodeName === "INPUT" && input.parentElement.children.length > 1) {
                    input.parentElement.removeChild(input.parentElement.lastElementChild);
                }
                else if (input.parentElement.firstElementChild.nodeName === "LABEL" && input.parentElement.children.length > 2) {
                    input.parentElement.removeChild(input.parentElement.lastElementChild);
                }
            }
        }
        return valid;
    }

    #onFocus(e) {

        if (e.currentTarget.attributes.required !== undefined) {

            if (e.currentTarget.value === "" || e.currentTarget.value.length === 0) {

                e.currentTarget.ariaInvalid = "true";

                if (e.currentTarget.parentElement.firstElementChild.nodeName === "INPUT" && e.currentTarget.parentElement.children.length === 1) {
                    e.currentTarget.parentElement.appendChild(this._errorMsg);
                }
                else if (e.currentTarget.parentElement.firstElementChild.nodeName === "LABEL" && e.currentTarget.parentElement.children.length === 2) {
                    e.currentTarget.parentElement.appendChild(this._errorMsg);
                }

            }
            else {
                e.currentTarget.ariaInvalid = "false";

                if (e.currentTarget.parentElement.firstElementChild.nodeName === "INPUT" && e.currentTarget.parentElement.children.length > 1) {
                    e.currentTarget.parentElement.removeChild(e.currentTarget.parentElement.lastElementChild);
                }
                else if (e.currentTarget.parentElement.firstElementChild.nodeName === "LABEL" && e.currentTarget.parentElement.children.length > 2) {
                    e.currentTarget.parentElement.removeChild(e.currentTarget.parentElement.lastElementChild);
                }
            }
        }
    }

    #onBlur(e) {

        if (e.currentTarget.parentElement.firstElementChild.nodeName === "INPUT" && e.currentTarget.parentElement.children.length > 1) {
            e.currentTarget.parentElement.removeChild(e.currentTarget.parentElement.lastElementChild);
        }
        else if (e.currentTarget.parentElement.firstElementChild.nodeName === "LABEL" && e.currentTarget.parentElement.children.length > 2) {
            e.currentTarget.parentElement.removeChild(e.currentTarget.parentElement.lastElementChild);
        }

        e.currentTarget.ariaInvalid = "false";
    }

    showMessage(message) {
        if (this._responseMsg) {

            this._responseMsg.firstElementChild.lastElementChild.textContent = message;
            this._responseMsg.dataset.show = "1";

            setTimeout(() => {

                this._responseMsg.dataset.show = "0";

            }, 3000);
        }
    }

    setValidator(validatorType, inputName) {
        let validator = {
            type: validatorType,
            inputName: inputName
        };

        this._validators.push(validator);
    }

    #isValidated() {
        let valid = true;

        if (this._validators.length > 0) {
            for (let i = 0, l = this._validators.length; i < l; i++) {

                let validator = this._validators[i];
                let input = this.#getInput(validator.inputName);

                switch (validator.type) {
                    case "email":

                        if (input !== null) {

                            let result = ValidationService.emailValidator(input);

                            if (result.error) {
                                valid = false;

                                input.ariaInvalid = "true";

                                this._validatorMsg.textContent = result.message;

                                if (input.parentElement.firstElementChild.nodeName === "INPUT" && input.parentElement.children.length === 1) {
                                    input.parentElement.appendChild(this._validatorMsg);
                                }
                                else if (input.parentElement.firstElementChild.nodeName === "LABEL" && input.parentElement.children.length === 2) {
                                    input.parentElement.appendChild(this._validatorMsg);
                                }

                            }
                            else {
                                input.ariaInvalid = "false";

                                if (input.parentElement.firstElementChild.nodeName === "INPUT" && input.parentElement.children.length > 1) {
                                    input.parentElement.removeChild(input.parentElement.lastElementChild);
                                }
                                else if (input.parentElement.firstElementChild.nodeName === "LABEL" && input.parentElement.children.length > 2) {
                                    input.parentElement.removeChild(input.parentElement.lastElementChild);
                                }
                            }
                        }
                    break;
                }
            }
        }
        return valid;
    }

    #getInput(name) {
        for (let i = 0, l = this._inputs.length; i < l; i++) {
            let input = this._inputs[i];

            if (input.name === name) {
                return input;
            }
        }
        return null;
    }
}
