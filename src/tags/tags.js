export class Tags {
    static stack = [
        {
            id: 0,
            tag: 'body',
            route: '/body.html',
            name: 'Body - Vidda',
            blog: 'Find balance in rhythm of life',
            image: '/images/group-of-women-in-sportswear-practicing-yoga.jpg'
        },
        {
            id: 1,
            tag: 'mind',
            route: '/body.html',
            name: 'Mind - Vidda',
            blog: 'Find balance in rhythm of life',
            image: '/images/group-of-women-in-sportswear-practicing-yoga.jpg'
        },
        {
            id: 2,
            tag: 'soul',
            route: '/body.html',
            name: 'Soul - Vidda',
            blog: 'Find balance in rhythm of life',
            image: '/images/group-of-women-in-sportswear-practicing-yoga.jpg'
        },
        {
            id: 0,
            tag: 'flow',
            route: '/body.html',
            name: 'Flow - Vidda',
            blog: 'Flow like nobody’s watching',
            image: '/images/women-exercising-with-instructor-in-gym-.jpg'
        },
        {
            id: 1,
            tag: 'power',
            route: '/body.html',
            name: 'Power - Vidda',
            blog: 'Flow like nobody’s watching',
            image: '/images/women-exercising-with-instructor-in-gym-.jpg'
        },
        {
            id: 2,
            tag: 'withing',
            route: '/body.html',
            name: 'Withing - Vidda',
            blog: 'Flow like nobody’s watching',
            image: '/images/women-exercising-with-instructor-in-gym-.jpg'
        },
        {
            id: 0,
            tag: 'embrace',
            route: '/body.html',
            name: 'Withing - Vidda',
            blog: 'Embrace the stillness within',
            image: '/images/yoga-is-a-work-of-heart-shot-of-a-group-of-young.jpg'
        },
        {
            id: 1,
            tag: 'inner',
            route: '/body.html',
            name: 'Withing - Vidda',
            blog: 'Embrace the stillness within',
            image: '/images/yoga-is-a-work-of-heart-shot-of-a-group-of-young.jpg'
        },
        {
            id: 2,
            tag: 'strength',
            route: '/body.html',
            name: 'Withing - Vidda',
            blog: 'Embrace the stillness within',
            image: '/images/yoga-is-a-work-of-heart-shot-of-a-group-of-young.jpg'
        },
    ];

    static getTags() {
        return this.stack;
    }

    static getTagsByBlog(blog) {
        let tags = [];

        for (let i = 0; i < this.stack.length; i++) {

            if (blog === this.stack[i].blog) {
               tags.push(this.stack[i]);
            }
        }
        return tags;
    }
    static getRouteByTag(tag) {

        for (let i = 0; i < this.stack.length; i++) {

            if (tag === this.stack[i].tag) {
                return this.stack[i]
            }
        }
        return null;
    }

    static getRouteNameById(routeId) {
        let name = null;

        for (let i = 0; i < this.stack.length; i++) {
            if (routeId === this.stack[i].id) {
                name = this.stack[i].name;
            }
        }
        return name;
    }

    static getTagNames() {
        let names = [];

        for (let i = 0; i < this.stack.length; i++) {
            names.push(this.stack[i].tag);
        }
        return names;
    }
}
