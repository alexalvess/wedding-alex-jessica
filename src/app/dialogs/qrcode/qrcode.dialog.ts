import { Dialog, DialogRef, DIALOG_REF, Inject, PrepareDialog } from "@nimble-ts/core";
import { PixService } from "src/app/services/pix.service";

@PrepareDialog({
    template: require('./qrcode.dialog.html'),
    style: require('./qrcode.dialog.scss')
})
export class QrCodeDialog extends Dialog {
    public showQrCode: boolean = false;
    public qrcode: string;

    public Currency = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

    constructor(
        @Inject(DIALOG_REF) public dialogRef: DialogRef<QrCodeDialog>,
        private pixService: PixService) {
        super();
    }

    async onOpen() {
        this.qrcode = await this.pixService.generateQrCode(this.dialogRef.data.category, this.dialogRef.data.value);
        this.render(() => this.showQrCode = true);
    }
}