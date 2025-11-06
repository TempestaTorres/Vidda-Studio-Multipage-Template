export class LightboxComponent{
    constructor(ytbVideoId, btnOpenSelector, options = {}){

        let Default = {
            mute: '0',
            autoplay: '0',
            loop: 'no',
            controls: '0',
            start: '0',
        };

        this._options =  $.extend({}, Default, options);
        this._url = 'https://www.youtube.com/embed/';
        this._overlay = null;
        this._lightbox = null;
        this._container = null;
        this._btnOpen = document.querySelector(btnOpenSelector);

        if (ytbVideoId && ytbVideoId.length > 0) {

            this._url += ytbVideoId + "?feature=oembed?playlist=" + ytbVideoId + "&mute=" + this._options.mute + "&autoplay=" + this._options.autoplay + "&loop=" + this._options.loop
            + "&controls=" + this._options.controls + "&start=" + this._options.start;

            if (this._btnOpen !== null) {
                this._btnOpen.addEventListener("click", this.#lightboxOpen.bind(this));
            }
        }
    }

    #lightboxOpen(e) {

        e.preventDefault();

        let body = document.querySelector('body');
        let bodyFirstChild = body.firstElementChild;

        this._overlay = document.createElement("div");
        this._overlay.classList.add("mfp-bg", "mfp-fade", "mfp-ready");

        //Player
        this._lightbox = document.createElement("div");
        this._lightbox.classList.add("mfp-wrap", "mfp-close-btn-in", "mfp-auto-cursor", "mfp-fade", "mfp-ready");

        //Container
        this._container = document.createElement("div");
        this._container.classList.add("mfp-container", "mfp-iframe-holder");

        //Content
        let divContent = document.createElement("div");
        divContent.classList.add("mfp-content");

        //Scaler
        let divScaler = document.createElement("div");
        divScaler.classList.add("mfp-iframe-scaler");

        //Button
        let button = document.createElement("button");
        button.classList.add("mfp-close", "akit-popup-close");
        button.title = "Close (Esc)";
        button.textContent = '×';

        //iframe
        let iframe = document.createElement("iframe");
        iframe.src = this._url;
        iframe.className = "mfp-iframe";
        iframe.frameBorder = "0";

        //Preloader
        let divPreloader = document.createElement("div");
        divPreloader.classList.add("mfp-preloader");
        divPreloader.textContent = "Loading...";

        divScaler.appendChild(button);
        divScaler.appendChild(iframe);

        divContent.appendChild(divScaler);

        this._container.appendChild(divContent);
        this._container.appendChild(divPreloader);

        this._lightbox.appendChild(this._container);

        body.insertBefore(this._overlay, bodyFirstChild);
        body.insertBefore(this._lightbox, bodyFirstChild);

        button.addEventListener("click", this.#lightboxClose.bind(this));

    }

    #lightboxClose(e) {
        e.preventDefault();

        this._overlay.classList.remove("mfp-ready");
        this._lightbox.classList.remove("mfp-ready");

        setTimeout(() => {
            this._overlay.remove();
            this._lightbox.remove();
        }, 300);
    }
}
