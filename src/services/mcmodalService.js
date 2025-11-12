export class McModalService {

    static activateModalService() {
        const togglers = document.querySelectorAll('[data-toggle="mc-modal"]');

        let mcOverlay = document.querySelector('.mc-modal-bg');

        if (mcOverlay) {
            mcOverlay.addEventListener("click", this.mcOverlayClick);
        }

        if (togglers) {
            for (let i = 0; i < togglers.length; i++) {

                let toggler = togglers[i];
                toggler.addEventListener('click', this.mcToggle);

            }
        }

        let buttons = document.querySelectorAll('[data-action="close-mc-modal"]');

        if (buttons) {
            for (let i = 0; i < buttons.length; i++) {
                let button = buttons[i];
                button.addEventListener('click', this.mcModalClose);
            }
        }

        let banner = document.querySelector('.mc-banner');
        if (banner) {
            let btn = banner.querySelector('.bannerContent__closeButton');
            btn.addEventListener('click', this.mcBannerClose);
        }
    }

    static mcToggle(e) {
        e.preventDefault();

        if (window.innerWidth > 768)
        {
            McModalService.toggleMcOverlay();

            let target = document.querySelector(e.currentTarget.dataset.target);

            if (target) {
                target.classList.toggle('active');

                let content = target.querySelector('.modalContent');
                if (content) {
                    let rc = content.getBoundingClientRect();

                    content.parentElement.style.maxHeight = rc.height + 'px';
                }

            }
        }
        else {
            McModalService.toggleMcBanner();
        }
    }

    static toggleMcBanner() {
        let banner = document.querySelector('.mc-banner');
        if (banner) {
            banner.classList.toggle('active');
        }
    }

    static mcOverlayClick(e) {
        e.preventDefault();

        let modals = document.querySelectorAll('.mc-modal');
        if (modals) {
            for (let i = 0; i < modals.length; i++) {
                let modal = modals[i];
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    break;
                }
            }
        }
        e.currentTarget.classList.toggle('active');
    }

    static mcModalClose(e) {
        e.preventDefault();

        let modal = e.currentTarget.parentElement;
        if (modal) {
            modal.classList.toggle('active');
        }

        McModalService.toggleMcOverlay();
    }

    static toggleMcOverlay() {
        let mcOverlay = document.querySelector('.mc-modal-bg');

        if (mcOverlay) {
            mcOverlay.classList.toggle('active');
        }
    }

    static mcBannerClose(e) {
        e.preventDefault();

        let banner = document.querySelector('.mc-banner');
        if (banner) {
            banner.classList.toggle('active');
        }
    }
}
