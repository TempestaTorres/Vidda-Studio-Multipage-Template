/**
 *
 * @param {String | String[]} selector css selector or array of css selector
 * @param shownCls {String | String[]} css classes to add
 * @param {Object} option options for scrollObserver
 *https://github.com/codeAbinash/scroll-observer?tab=readme-ov-file
 * @param delay {Number} animation delay
 */


export default function scrollObserver(selector, shownCls, option= {}, delay = 500) {

    let s = 0;

    let observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            window.requestIdleCallback(() => {

                if (option?.once) {
                    if (entry.isIntersecting) {

                        animate(entry);

                        option.onshow ? option.onshow(entry) : false;

                        observer.unobserve(entry.target);
                    }
                }
                else {
                    if (entry.isIntersecting) {

                        animate(entry);
                    }
                    else {

                        if (Array.isArray(shownCls)) {
                            entry.target.classList.remove(...shownCls);
                        }
                        else {
                            entry.target.classList.remove(shownCls);
                        }

                        entry.target.classList.add(selector.split(".")[1]);
                        if (option && option.onhide) option.onhide(entry)
                    }
                }
            })
        })
    }, option);

    if (Array.isArray(selector))
        selector.forEach(qAll)
    else
        qAll(selector)


    function qAll(selector) {
        const item = document.querySelectorAll(selector)

        item.forEach((i) => {

            observer.observe(i);

        });
    }
    function animate(entry) {

        let sibling = entry.target.previousElementSibling;

        if (sibling && sibling.classList.contains(selector.split(".")[1])) {

            s += 300;
        }
        else {
            s = 0;
        }

        setTimeout(() => {

            if (Array.isArray(shownCls)) {
                entry.target.classList.add(...shownCls);
            }
            else {
                entry.target.classList.add(shownCls);
            }

            entry.target.classList.remove(selector.split(".")[1]);

            if (option && option.onshow)
                option.onshow(entry);
        }, delay + s);
    }
}
