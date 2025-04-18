import { Routes } from '@angular/router';
import { LayoutComponent } from './structure-layout/layout/layout.component';
import { GuidanceChildComponent } from './page/elevate-your-care-service/guidance/guidance-child/guidance-child.component';
import { GuidanceResolver } from './guards/guidance-resolver';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./page/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'aboutus',
        loadComponent: () =>
          import('./page/aboutus/aboutus.component').then(
            (m) => m.AboutusComponent
          ),
      },
      {
        path: 'tender',
        loadComponent: () =>
          import('./page/tender-section/tender-section.component').then(
            (m) => m.TenderSectionComponent
          ),
      },
      {
        path: 'packages/:id',
        loadComponent: () =>
          import('./page/packages-menu/packages-menu.component').then(
            (m) => m.PackagesMenuComponent
          ),
      },
      {
        path: 'services/:id',
        loadComponent: () =>
          import('./page/serivces-menu/serivces-menu.component').then(
            (m) => m.SerivcesMenuComponent
          ),
      },
      {
        path: 'elevate-care-service',
        loadComponent: () =>
          import(
            './page/elevate-your-care-service/elevate-care-home/elevate-care-home.component'
          ).then((m) => m.ElevateCareHomeComponent),
        children: [
          {
            path: 'website-development',
            loadComponent: () =>
              import(
                './page/elevate-your-care-service/website-development/website-development.component'
              ).then((m) => m.WebsiteDevelopmentComponent),
          },
          {
            path: 'policy-development',
            loadComponent: () =>
              import(
                './page/elevate-your-care-service/policy-dev/policy-dev.component'
              ).then((m) => m.PolicyDevComponent),
          },
          {
            path: 'guidance',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import(
                    './page/elevate-your-care-service/guidance/guidance-parent/guidance.component'
                  ).then((m) => m.GuidanceComponent),
              },
              {
                path: ':context',
                loadComponent: () =>
                  import(
                    './page/elevate-your-care-service/guidance/guidance-child/guidance-child.component'
                  ).then((m) => m.GuidanceChildComponent),
                resolve: { guidanceData: GuidanceResolver },
              },
            ],
          },
          {
            path: 'business-traing',
            loadComponent: () =>
              import(
                './page/elevate-your-care-service/business-training/business-training.component'
              ).then((m) => m.BusinessTrainingComponent),
          },
        ],
      },
      {
        path: 'resources',
        loadComponent: () =>
          import('./page/resource/resource-home/resource-home.component').then(
            (m) => m.ResourceHomeComponent
          ),
        children: [
          {
            path: 'brouchers',
            loadComponent: () =>
              import('./page/resource/brouchers/brouchers.component').then(
                (m) => m.BrouchersComponent
              ),
          },
          {
            path: 'success-stories',
            loadComponent: () =>
              import(
                './page/resource/success-stories/success-stories.component'
              ).then((m) => m.SuccessStoriesComponent),
          },
          {
            path: 'faq',
            loadComponent: () =>
              import('./page/resource/faq/faq.component').then(
                (m) => m.FaqComponent
              ),
          },
          {
            path: 'videos',
            loadComponent: () =>
              import('./page/resource/videos/videos.component').then(
                (m) => m.VideosComponent
              ),
          },
          {
            path: 'blog',
            loadComponent: () =>
              import('./page/resource/blog/blog.component').then(
                (m) => m.BlogComponent
              ),
          },
          {
            path: 'ebooks',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import(
                    './page/resource/e-books-home/e-book-initial-page/e-book-initial-page.component'
                  ).then((m) => m.EBookInitialPageComponent),
              },
              {
                path: 'detailed-view',
                loadComponent: () =>
                  import(
                    './page/resource/e-books-home/e-book-detailed-view/e-book-detailed-view.component'
                  ).then((m) => m.EBookDetailedViewComponent),
              },
            ],
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
