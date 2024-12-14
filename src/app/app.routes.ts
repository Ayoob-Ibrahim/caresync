import { Routes } from '@angular/router';
import { LayoutComponent } from './structure-layout/layout/layout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '', component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () =>
                    import('./page/home/home.component').then((m) => m.HomeComponent),
            },
        ]

    },
];
