import { Page, PreparePage } from '@nimble-ts/core/page';
import { Router } from '@nimble-ts/core/route';

@PreparePage({
    template: require('./root.page.html'),
    style: require('./root.page.scss')
})
export class RootPage extends Page {
    public get routePath() { return Router.currentPath; }

    public loading = false;
    public menuItems = [
        { text: '✈️ Para a Lua de Mel', path: '' },
        { text: '📺 Eletrodomésticos', path: 'second' },
        { text: '🏠 Utilidades', path: 'third' },
        { text: '🛏️ Cama, Mesa e Banho', path: 'third' }
    ];

    private cancelListeners: (() => void)[] = [];

    onInit() {
        this.cancelListeners = [
			Router.onStartChange(() => {
                this.render(() => this.loading = true);
			}),
			Router.onEndChange(() => {
				this.render(() => this.loading = false);
			})
        ]
	}

    onDestroy() {
        this.cancelListeners.forEach(unlistener => {
			unlistener();
		});
    }
}