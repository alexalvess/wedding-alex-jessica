import { Dialog, DialogRef, DIALOG_REF, Inject, PrepareDialog } from "@nimble-ts/core";
import { PixService } from "src/app/services/pix.service";

@PrepareDialog({
    template: require('./qrcode.dialog.html'),
    style: require('./qrcode.dialog.scss')
})
export class QrCodeDialog extends Dialog {
    public showQrCode: boolean = false;
    public qrcode: string;

    constructor(
        @Inject(DIALOG_REF) public dialogRef: DialogRef<QrCodeDialog>,
        private pixService: PixService) {
        super();
    }

    async onOpen() {
        this.qrcode = await this.pixService.generateQrCode(this.dialogRef.data.product, this.dialogRef.data.price);
        this.render(() => this.showQrCode = true);
    }
}