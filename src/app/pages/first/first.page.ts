import { DialogBuilder } from '@nimble-ts/core';
import { Page, PreparePage } from '@nimble-ts/core/page';
import { QrCodeDialog } from 'src/app/dialogs/qrcode/qrcode.dialog';
import db from '../../../db.json';

@PreparePage({
    template: require('./first.page.html'),
    style: require('./first.page.scss'),
    title: 'Nimble - First Page'
})
export class FirstPage extends Page {

	public items = [];

    constructor(private dialog: DialogBuilder) {
        super();
	}

	onInit(): void {
		db.gifts.forEach(element => {
			this.items.push(...element.products);
		});
	}

	public openQrCode(product: string, price: number) {
		this.dialog.open(QrCodeDialog, {
			data: { product, price }
		});
	}
}