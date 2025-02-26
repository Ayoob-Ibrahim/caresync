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
                loadComponent: () =>
                    import(
                        './page/packages-menu/packages-menu.component'
                    ).then((m) => m.PackagesMenuComponent)

                ,
            },
            {
                path: 'services/:id',
                loadComponent: () =>
                    import(
                        './page/serivces-menu/serivces-menu.component'
                    ).then((m) => m.SerivcesMenuComponent)
                ,
            },
            {
                path: 'elevate-care-service',
                loadComponent: () =>
                    import('./page/elevate-your-care-service/elevate-care-home/elevate-care-home.component').then((m) => m.ElevateCareHomeComponent),
                children: [
                    {
                        path: 'website-development',
                        loadComponent: () =>
                            import('./page/elevate-your-care-service/website-development/website-development.component').then(m => m.WebsiteDevelopmentComponent),
                    },
                    {
                        path: 'guidance',
                        loadComponent: () =>
                            import('./page/elevate-your-care-service/guidance/guidance.component').then(m => m.GuidanceComponent),
                    },
                ]
            },
            {
                path: 'resources',
                loadComponent: () =>
                    import('./page/resource/resource-home/resource-home.component').then((m) => m.ResourceHomeComponent),
                children: [
                    {
                        path: 'brouchers',
                        loadComponent: () =>
                            import('./page/resource/brouchers/brouchers.component').then(m => m.BrouchersComponent),
                    },
                    {
                        path: 'ebooks',
                        children: [
                            {
                                path: '',
                                loadComponent: () => import('./page/resource/e-books-home/e-book-initial-page/e-book-initial-page.component').then(m => m.EBookInitialPageComponent),
                            },
                            {
                                path: 'detailed-view',
                                loadComponent: () => import('./page/resource/e-books-home/e-book-detailed-view/e-book-detailed-view.component').then(m => m.EBookDetailedViewComponent),
                            },

                        ]
                    }

                ]
            }

        ]

    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
