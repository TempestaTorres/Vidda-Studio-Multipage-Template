export class SwiperComponent {
    constructor() {
        this._swipers = document.querySelectorAll('.media-viewer__swiper');
    }
    init() {
        if (this._swipers) {

            for (let swiper of this._swipers) {

                let slideManager = swiper.firstElementChild;

                if (slideManager.classList.contains('slide-manager')) {

                    this.#slideManagerInit(slideManager)
                }

                this.#swiperNavigatorInit(swiper);
            }
        }
    }

    #slideManagerInit(slideManager) {

        for (let i = 0; i < slideManager.children.length; i++) {

            let slideManagerElement = slideManager.children[i];

            if (slideManagerElement.children.length > 0) {
                slideManagerElement.children[0].dataset.index = `${i}`;
            }
        }
        slideManager.dataset.slideIndex = "0";
    }

    #swiperNavigatorInit(swiper) {

        for (let i = 0; i < swiper.children.length; i++) {
            let swiperElement = swiper.children[i];

            if (swiperElement.classList.contains('navigation--prev')) {
                swiperElement.addEventListener('click', this.#swiperPrevClick);
            }
            else if (swiperElement.classList.contains('navigation--next')) {
                swiperElement.addEventListener('click', this.#swiperNextClick);
            }
        }
    }

    #swiperPrevClick(e) {
        e.preventDefault();

        let slideManager = e.currentTarget.parentElement.firstElementChild;
        let maxIndex = slideManager.children.length - 1;
        let currentIndex = parseInt(slideManager.dataset.slideIndex, 10);

        --currentIndex;
        if (currentIndex < 0) {
            currentIndex = maxIndex;
        }

        slideManager.dataset.slideIndex = `${currentIndex}`;

        let offset = currentIndex * 100;

        slideManager.style.transform = `translate3d(calc(-${offset}% + 0px), 0px, 0px)`;

    }

    #swiperNextClick(e) {
        e.preventDefault();

        let slideManager = e.currentTarget.parentElement.firstElementChild;
        let maxIndex = slideManager.children.length - 1;
        let currentIndex = parseInt(slideManager.dataset.slideIndex, 10);

        ++currentIndex;
        if (currentIndex > maxIndex) {
            currentIndex = 0;
        }

        slideManager.dataset.slideIndex = `${currentIndex}`;

        let offset = currentIndex * 100;

        slideManager.style.transform = `translate3d(calc(-${offset}% + 0px), 0px, 0px)`;
    }
}
