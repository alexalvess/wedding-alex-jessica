import { Injectable } from "@nimble-ts/core";
import { QrCodePix } from "qrcode-pix";

@Injectable({ single: true })
export class PixService {
    public async generateQrCode(product: string, price: number): Promise<{image: string, payload: string}> {
        product = product.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

        const qrCodePix = QrCodePix({
            version: '01',
            key: '01262129613',
            name: 'Alex Alves Silva',
            city: 'Belo Horizonte',
            message: `Envio de presente de casamento: ${product}`,
            value: price
        });

        return { 
            image: await qrCodePix.base64(),
            payload: qrCodePix.payload()
        };
    }
}