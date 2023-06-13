import { Page, PreparePage } from '@nimble-ts/core/page';
import db from '../../../db.json';

@PreparePage({
    template: require('./first.page.html'),
    style: require('./first.page.scss'),
    title: 'Nimble - First Page'
})
export class FirstPage extends Page {

	public items = [];

    constructor() {
        super();
	}

	onInit(): void {
		db.gifts.forEach(element => {
			this.items.push(...element.products);
		});
	}
}