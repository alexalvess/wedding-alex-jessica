import { DialogBuilder, Form } from '@nimble-ts/core';
import { Page, PreparePage } from '@nimble-ts/core/page';
import { QrCodeDialog } from 'src/app/dialogs/qrcode/qrcode.dialog';
import db from '../../../db.json';

@PreparePage({
    template: require('./first.page.html'),
    style: require('./first.page.scss'),
    title: 'Presenteie Jéssica & Alex'
})
export class FirstPage extends Page {
	public showValue: boolean = false;

	public rangeValue: {min, max, range, match, currentValue};

	public dropDownCategory = {
		selected: undefined,
		show: false,
		items: []
	}

	public Currency = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	public photos = [1,2,3,4,5,6,7,8,9,10,11,12];
	public album: { number: number }[];

	constructor(private dialog: DialogBuilder) {
        super();
		this.dropDownCategory.items = db.gifts;
		this.album = [1,2,3,4].map(x => this.photos.map(y => ({
			number: y,	
		}))).flatMap(x => x);
	}

	onInit(): void {
	}

	public toggleCategoryShow() {
		this.render(() => {
			this.dropDownCategory.show = !this.dropDownCategory.show;
		});
	}

	public selectCategoryItem(item) {
		this.render(() => {
			this.dropDownCategory.selected = item;
			this.dropDownCategory.show = false;
			this.showValue = true;

			this.rangeValue = {
				min: item.values.min,
				max: item.values.max,
				range: item.values.range,
				match: item.values.match,
				currentValue: item.values.min
			}
		});
	}

	public increase() {
		this.render(() => {
			this.rangeValue.currentValue = Math.min((this.rangeValue.currentValue + this.rangeValue.range), this.rangeValue.max);
		});
	}
	public decrease() {
		this.render(() => {
			this.rangeValue.currentValue = Math.max((this.rangeValue.currentValue - this.rangeValue.range), this.rangeValue.min);
		});
	}

	public openQrCode() {
		const category = this.dropDownCategory.selected['title'];
		const value = this.rangeValue.currentValue;

		console.log(category);
		console.log(value);

		this.dialog.open(QrCodeDialog, {
			data: { category, value }
		});
	}
}