import { RouteBase } from '@nimble-ts/core/route';

export const ROUTES: RouteBase[] = [
	{
		path: '',
		page: () => import('./pages/root/root.page').then(x => x.RootPage),
		children: [
			{
				path: '',
				page: () => import('./pages/honeymoon/honeymoon.page').then(x => x.HoneymoonPage)
			},
			{
				path: 'honeymoon',
				page: () => import('./pages/honeymoon/honeymoon.page').then(x => x.HoneymoonPage)
			},
			{
				path: 'eletro',
				page: () => import('./pages/eletro/eletro.page').then(x => x.EletroPage)
			},
			{
				path: 'third',
				page: () => import('./pages/third/third.page').then(x => x.ThirdPage)
			}   
		]
	}
];