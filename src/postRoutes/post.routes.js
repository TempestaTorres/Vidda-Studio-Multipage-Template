export class PostRoutes {
    static stack = [
        {
            id: 0,
            route: '/harmony.html',
            name: 'Find balance in rhythm of life'
        },
        {
            id: 1,
            route: '/harmony.html',
            name: 'Flow like nobody’s watching'
        },
        {
            id: 2,
            route: '/harmony.html',
            name: 'Embrace the stillness within'
        },
        {
            id: 3,
            route: '/harmony.html',
            name: 'Connect with your true self'
        },
        {
            id: 4,
            route: '/harmony.html',
            name: 'Discover the powers within'
        },
        {
            id: 5,
            route: '/harmony.html',
            name: 'Unleash your inner strength'
        },
    ];

    static getRouteById(id) {

        if (id >= 0 && id <= this.stack.length) {
            return this.stack[id];
        }
        return null;
    }

    static getRouteByName(name) {

        for (let i = 0; i < this.stack.length; i++) {

            if (name === this.stack[i].name) {
                return this.stack[i];
            }
        }
        return null;
    }
}
