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
