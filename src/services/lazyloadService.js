export class LazyLoadService {

    static lazyLoadObserver() {

        const lazyloadBackgrounds = document.querySelectorAll( `.app-con.a-parent:not(.a-lazyloaded)` );

        if (lazyloadBackgrounds) {

            const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
                entries.forEach( ( entry ) => {
                    if ( entry.isIntersecting ) {
                        let lazyloadBackground = entry.target;
                        if( lazyloadBackground ) {
                            lazyloadBackground.classList.add( 'a-lazyloaded' );
                        }
                        lazyloadBackgroundObserver.unobserve( entry.target );
                    }
                });
            }, { rootMargin: '200px 0px 200px 0px' } );

            lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
                lazyloadBackgroundObserver.observe( lazyloadBackground );
            } );
        }
    }
}
