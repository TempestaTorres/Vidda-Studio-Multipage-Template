export class WidgitsService {

    static megamenuInit(activeMenuIndex, callback) {

        const megamenu = document.querySelector('.appkit-menu-container');
        if (megamenu) {
            const navbar = megamenu.querySelector('.appkit-navbar-nav');
            if (navbar) {

                for (let i = 0; i < navbar.children.length; i++) {

                    if (!navbar.children[i].firstElementChild.classList.contains('akit-menu-dropdown-toggle')) {
                        navbar.children[i].firstElementChild.addEventListener('click', callback);
                    }

                    navbar.children[i].classList.remove('current-menu-item');
                    navbar.children[i].firstElementChild.classList.remove('active');

                    if (activeMenuIndex !== null && i === activeMenuIndex) {
                        navbar.children[i].classList.add('current-menu-item');
                        navbar.children[i].firstElementChild.classList.add('active');
                    }
                }
            }
        }
    }

    static menuToggler() {

        const toggler = document.querySelectorAll('.appkit-menu-toggler');
        const overlay = document.querySelector('.appkit-menu-overlay');

        if (toggler) {

            toggler.forEach((item) => {
                item.addEventListener('click', this.menuToggle);
            });
        }

        if (overlay) {
            overlay.addEventListener('click', this.menuToggle);
        }

    }
    static menuToggle(e) {
        e.preventDefault();

        const menuContainer = document.querySelector('.appkit-menu-container');
        if (menuContainer) {

            const offcanvas = document.querySelectorAll('.appkit-menu-offcanvas-elements');
            if (offcanvas) {
                offcanvas.forEach((el) => {
                    el.classList.toggle('active');

                });
            }
        }

    }

    static dropdownMenuToggler() {

        const togglers = document.querySelectorAll('.akit-menu-dropdown-toggle');

        if (togglers) {
            togglers.forEach((el) => {
                el.addEventListener('click', this.dropdownMenuToggle);
            });
        }
    }

    static dropdownMenuToggle(e) {
        e.preventDefault();

        const navbar = e.currentTarget.parentElement.parentElement;
        const icon = e.currentTarget.firstElementChild;

        if (navbar && navbar.classList.contains('submenu-click-on-icon')) {

            const submenu = e.currentTarget.parentElement.querySelector('.appkit-submenu-panel');
            if (submenu) {
                submenu.classList.toggle('appkit-dropdown-open');

                if (icon) {

                    if (window.innerWidth <= 1024) {

                        if (submenu.classList.contains('appkit-dropdown-open'))
                        {
                            icon.style.transform = 'rotate(180deg)';
                        }
                        else {
                            icon.style.transform = 'rotate(360deg)';
                        }
                    }
                }
            }
        }
    }
}
