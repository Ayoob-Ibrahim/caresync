import { Routes } from '@angular/router';
import { LayoutComponent } from './structure-layout/layout/layout.component';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home', },
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () =>
                    import('./page/home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'aboutus',
                loadComponent: () =>
                    import('./page/aboutus/aboutus.component').then((m) => m.AboutusComponent),
            },
            {
                path: 'packages/:id',
                loadComponent: () => {
                    const platformId = inject(PLATFORM_ID);
                    if (isPlatformBrowser(platformId)) {
                        return import(
                            './page/packages-menu/packages-menu.component'
                        ).then((m) => m.PackagesMenuComponent);
                    } else {
                        return Promise.resolve(null);
                    }
                },
                canActivate: [false],
            }
        ]

    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
