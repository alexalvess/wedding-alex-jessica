import { NimbleApp } from '@nimble-ts/core';
import { ROUTES } from './app/routes';
import { PixService } from './app/services/pix.service';

NimbleApp.config({
    routes: ROUTES,
    directives: [],
    providers: [
        PixService
    ]
}).start();