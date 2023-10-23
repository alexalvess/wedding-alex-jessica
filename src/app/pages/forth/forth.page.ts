import { Page, PreparePage } from '@nimble-ts/core/page';

@PreparePage({
    template: require('./forth.page.html'),
    style: require('./forth.page.scss'),
    title: 'Forth'
})
export class ForthPage extends Page {

    constructor() {
        super();
    }

    onEnter() {
    }

    onExit() {
    }
}