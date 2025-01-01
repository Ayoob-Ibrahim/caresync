import { Routes } from '@angular/router';
import { LayoutComponent } from './structure-layout/layout/layout.component';

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
                    import('./page/packages-menu/packages-menu.component').then((m) => m.PackagesMenuComponent),
            }
        ]

    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
