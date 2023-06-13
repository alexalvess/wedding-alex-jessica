import { Injectable } from "@nimble-ts/core";
import { QrCodePix } from "qrcode-pix";

@Injectable({ single: true })
export class PixService {
    public generateQrCode(product: string, price: number): Promise<string> {
        const qrCodePix = QrCodePix({
            version: '01',
            key: '01262129613',
            name: 'Alex Alves Silva',
            city: 'Belo Horizonte',
            message: `João está te enviando um presente de casamento: ${product}`,
            cep: '31340220',
            value: price,
        });

        return qrCodePix.base64();
    }
}