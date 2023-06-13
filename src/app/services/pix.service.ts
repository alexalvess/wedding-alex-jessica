import { QrCodePix } from "qrcode-pix";

export class PixService {
    public generateQrCode(product: string, price: number): Promise<string> {
        const qrCodePix = QrCodePix({
            version: '01',
            key: '+5537998200386',
            name: 'Alex Alves Silva',
            city: 'Belo Horizonte',
            message: ``,
            cep: '31340220',
            value: price,
        });

        return qrCodePix.base64();
    }
}