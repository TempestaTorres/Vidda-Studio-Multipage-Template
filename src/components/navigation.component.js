import {NavigationRoutes} from "../navigationRoutes/navigation.routes.js";

export class NavigationComponent {
    constructor() {

        this._menuContainer = document.querySelector('.appkit-menu-container');
        this._navbar = null;
    }
    init() {
        if (this._menuContainer) {

            this._navbar = this._menuContainer.querySelector('.appkit-navbar-nav');

            if (this._navbar) {

                let routes = NavigationRoutes.getRoutes();

                for (let i = 0; i < routes.length; i++) {

                    let routeItem = routes[i];

                    if (!routeItem.dropdown) {
                        this.#addMenuItem(this._navbar, routeItem);
                    }
                    else {
                        this.#addDropDownMenuItem(routeItem);
                    }
                }
            }
        }
    }

    #addMenuItem(navbar, routeItem) {
        let li = document.createElement("li");
        li.classList.add("menu-item");

        let a = document.createElement("a");
        a.className = "akit-menu-nav-link";
        a.textContent = routeItem.name;
        a.href = routeItem.path + routeItem.name;

        li.appendChild(a);

        navbar.appendChild(li);
    }

    #addDropDownMenuItem(routeItem) {
        let li = document.createElement("li");
        li.classList.add("menu-item", "menu-item-has-children", "appkit-dropdown-has");

        let a = document.createElement("a");
        a.classList.add("akit-menu-nav-link", "akit-menu-dropdown-toggle");
        a.textContent = routeItem.name;
        a.href = routeItem.path + routeItem.name;

        let i = document.createElement("i");
        i.classList.add("icon", "icon-down-arrow1", "appkit-submenu-indicator");
        i.ariaHidden = "true";

        a.appendChild(i);

        li.appendChild(a);
        // Submenu
        let ul = document.createElement("ul");
        ul.classList.add("appkit-dropdown", "appkit-submenu-panel");

        for ( let i = 0; i < routeItem.submenu.length; i++) {

            let submenu = routeItem.submenu[i];

            let subli = document.createElement("li");
            subli.classList.add("menu-item", "nav-item");

            let suba = document.createElement("a");
            suba.className = "dropdown-item";
            suba.href = submenu.path + submenu.name;
            suba.textContent = submenu.name;

            subli.appendChild(suba);

            ul.appendChild(subli);
        }

        li.appendChild(ul);

        this._navbar.appendChild(li);
    }

    getCurrentRouteId() {
        let pathName = window.location.pathname;
        return NavigationRoutes.getRouteId(pathName);
    }
    setRoute(selector, routeName, textSelector = false, callback = null) {
        let item = document.querySelector(selector);

        if (item && item.nodeName === "A") {
            let route = NavigationRoutes.getRouteByName(routeName);

            if (route !== null) {
                item.href = "/" + routeName;

                if (!textSelector) {
                    item.textContent = routeName;
                }
                else {
                    item.firstElementChild.textContent = routeName;
                }
            }
            if (callback) {
                item.addEventListener("click", callback);
            }
        }
    }
}
