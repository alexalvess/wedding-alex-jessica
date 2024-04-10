import { Dialog, DialogRef, DIALOG_REF, Inject, PrepareDialog } from "@nimble-ts/core";
import { PixService } from "src/app/services/pix.service";
import Toastify from 'toastify-js';

@PrepareDialog({
    template: require('./qrcode.dialog.html'),
    style: require('./qrcode.dialog.scss')
})
export class QrCodeDialog extends Dialog {
    public showQrCode: boolean = false;
    public qrcode: string;
    public payload: string;

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
        const pix = await this.pixService.generateQrCode(this.dialogRef.data.category, this.dialogRef.data.value);
        this.qrcode = pix.image;
        this.payload = pix.payload;
        this.render(() => this.showQrCode = true);
    }

    copyToClipboard() {
        const textarea = document.createElement('textarea');
        textarea.style.position = 'fixed';
        textarea.style.left = '0';
        textarea.style.top = '0';
        textarea.style.opacity = '0';
        textarea.value = this.payload;
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        Toastify({
            text: 'PIX Copiado...',
            duration: 1500,
            gravity: "bottom",
            position: "center",
            stopOnFocus: false,
            style: {
                background: "linear-gradient(to right, #381700, #5f2906)",
                borderRadius: "25px",
                fontSize: "small"
            }
        }).showToast();
      }
}