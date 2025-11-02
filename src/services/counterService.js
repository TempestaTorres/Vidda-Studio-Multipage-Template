export default function counterObserver(observeItem) {
    "use strict";

    let numbers = document.querySelectorAll(observeItem);

    if (numbers.length > 0) {

        const observer = new IntersectionObserver((entries, observer) => {

                    entries.forEach(entry => {
                        window.requestIdleCallback(() => {

                                if (entry.isIntersecting) {

                                    $(entry.target).numerator({
                                        easing: 'linear', // easing options.
                                        rounding: parseInt(entry.target.dataset.rounding, 10),
                                        duration: entry.target.dataset.duration, // the length of the animation.
                                        delimiter: ',',
                                        fromValue: entry.target.dataset.fromValue,
                                        toValue: entry.target.dataset.toValue
                                    });
                                    observer.unobserve(entry.target);
                                }
                        });
                    });
        },
                {
                    threshold: 1.0
        });

        numbers.forEach((i) => {

            observer.observe(i);

        });
    }

}
