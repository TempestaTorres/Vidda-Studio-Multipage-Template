export class AccordionService {
    constructor() {
        this._accordionItems = document.querySelectorAll('.appkit-accordion');
    }
    init() {
        if (this._accordionItems) {

            let index = 1;

            this._accordionItems.forEach(accordionItem => {

                accordionItem.id = 'accordion-item-' + index;

                this.#initAccordionCards(accordionItem);

                ++index;
            });
        }
    }
    #initAccordionCards(accordionItem) {

        for (let i = 0; i < accordionItem.children.length; i++) {
            let card = accordionItem.children[i];

            if (card.classList.contains('appkit-card')) {

                let collapse = card.lastElementChild;

                if (collapse && collapse.classList.contains('collapse')) {

                    collapse.dataset.parent = "#" + accordionItem.id;
                    collapse.id = accordionItem.id + '-collapse-' + (i + 1);
                }

                let header = card.firstElementChild;

                if (header && header.classList.contains('appkit-card-header')) {

                    let toggler = header.firstElementChild;

                    if (toggler) {
                        toggler.classList.add('collapsed');
                        toggler.dataset.akitToggle = "collapse";
                        toggler.dataset.target = "#" + collapse.id;
                        toggler.ariaExpanded = "false";

                        header.addEventListener('click', this.#accordionItemToggle.bind(this));
                    }
                }
            }
        }
    }

    #accordionItemToggle(e) {
        e.preventDefault();

        let card = e.currentTarget.parentElement;
        let accordionItem = card.parentElement;

        let cardId = card.lastElementChild.id;

        for (let i = 0; i < accordionItem.children.length; i++) {

            let sibling = accordionItem.children[i];

            if (sibling.lastElementChild.id !== cardId && sibling.classList.contains('active')) {
                this.#toggleCard(sibling);
                break;
            }
        }

        this.#toggleCard(card);

    }

    #toggleCard(card) {

        card.classList.toggle('active');

        let toggler = card.querySelector('.akit-accordion--toggler');

        if (card.classList.contains('active')) {

            toggler.ariaExpanded = "true";
            toggler.classList.remove('collapsed');

        }
        else {
            toggler.ariaExpanded = "false";
            toggler.classList.add('collapsed');
        }

        card.lastElementChild.classList.remove('collapse');
        card.lastElementChild.classList.add('collapsing');

        if (card.classList.contains('active')) {
            const rc = card.lastElementChild.firstElementChild.getBoundingClientRect();

            card.lastElementChild.style.height = `${rc.height}px`;
        }
        else {
            card.lastElementChild.style.height = '';
        }

        setTimeout(function () {

            card.lastElementChild.classList.remove('collapsing');
            card.lastElementChild.classList.add('collapse');
            card.lastElementChild.classList.toggle('show');

        }, 350);
    }
}
