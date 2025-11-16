export class NavigationRoutes {
    static routes = [
        {
            id: 0,
            name: "Home",
            path: "/",
            route: "/index.html",
            dropdown: false,
        },
        {
            id: 1,
            name: "About",
            path: "/",
            route: "/about.html",
            dropdown: false,
        },
        {
            id: 2,
            name: "Classes",
            path: "#",
            route: "",
            dropdown: true,
            submenu: [
                {
                    id: 0,
                    name: "Classes",
                    path: "/",
                    route: "/classes.html",
                },
                {
                    id: 1,
                    name: "Class Detail",
                    path: "/",
                    route: "/class-detail.html",
                },
            ]
        },
        {
            id: 3,
            name: "Pages",
            path: "#",
            route: "",
            dropdown: true,
            submenu: [
                {
                    id: 0,
                    name: "Instructors",
                    path: "/",
                    route: "/instructors.html",
                },
                {
                    id: 1,
                    name: "FAQs",
                    path: "/",
                    route: "/faqs.html",
                },
                {
                    id: 2,
                    name: "Pricing",
                    path: "/",
                    route: "/pricing.html",
                },
                {
                    id: 3,
                    name: "Products",
                    path: "/",
                    route: "/products.html",
                },
                {
                    id: 4,
                    name: "Testimonial",
                    path: "/",
                    route: "/testimonial.html",
                },
                {
                    id: 5,
                    name: "Contact",
                    path: "/",
                    route: "/contact.html",
                },
                {
                    id: 6,
                    name: "Blog",
                    path: "/",
                    route: "/blog.html",
                },
                {
                    id: 7,
                    name: "Page 404",
                    path: "/",
                    route: "/404.html",
                },
            ]
        },
    ];

    static getRoutes() {
        return this.routes;
    }

    static getRouteByName(routeName) {

        for (let i = 0; i < this.routes.length; i++) {
            let route = this.routes[i];
            if (route.path !== "#") {

                if (route.name === routeName) {
                    return route.route;
                }
            }
        }
        for (let i = 0; i < this.routes.length; i++) {
            let route = this.routes[i];
            if (route.path === "#" && route.dropdown) {

               for (let j = 0; j < route.submenu.length; j++) {

                   let subroute = route.submenu[j];
                   if (subroute.name === routeName) {
                       return subroute.route;
                   }
               }
            }
        }
        return null;
    }

    static getRouteId(routePath) {

        if (routePath === "/") {
            return 0;
        }
        let found = this.routes.find((route) => route.route === routePath);
        if (found !== undefined) {
            return found.id;
        }
        for (let i = 0; i < this.routes.length; i++) {
            let route = this.routes[i];

            if (route.dropdown) {

                let item = route.submenu.find((subroute) => subroute.route === routePath);
                if (item !== undefined) {
                    return route.id;
                }
            }
        }
        return null;
    }
}
