import { Routes } from '@angular/router';
import { maintenanceGuard, maintenanceBypassGuard } from './core/guards/maintenance.guard';

export const routes: Routes = [
  {
    path: 'maintenance',
    loadComponent: () =>
      import('./features/maintenance/maintenance.component').then(
        (m) => m.MaintenanceComponent,
      ),
    canActivate: [maintenanceBypassGuard],
    data: { title: 'Under Maintenance' },
  },
  {
    path: '',
    canActivate: [maintenanceGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/home/pages/home.component').then((m) => m.HomeComponent),
        data: { title: 'Home' },
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/services/pages/services-list.component').then(
                (m) => m.ServicesListComponent,
              ),
            data: { title: 'Services' },
          },
          {
            path: ':slug',
            loadComponent: () =>
              import('./features/services/pages/service-detail.component').then(
                (m) => m.ServiceDetailComponent,
              ),
          },
        ],
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/pages/about.component').then((m) => m.AboutComponent),
        data: { title: 'About' },
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/pages/contact.component').then((m) => m.ContactComponent),
        data: { title: 'Contact' },
      },
      {
        path: 'blog',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./features/blog/pages/blog-list.component').then((m) => m.BlogListComponent),
            data: { title: 'Blog & Insights' },
          },
          {
            path: ':slug',
            loadComponent: () =>
              import('./features/blog/pages/blog-post.component').then((m) => m.BlogPostComponent),
          },
        ],
      },
      {
        path: 'faq',
        loadComponent: () =>
          import('./features/faq/pages/faq.component').then((m) => m.FaqComponent),
        data: { title: 'FAQ' },
      },
      {
        path: 'privacy',
        loadComponent: () =>
          import('./features/legal/pages/legal-page.component').then((m) => m.LegalPageComponent),
        data: { legalKey: 'privacy', title: 'Privacy Policy' },
      },
      {
        path: 'terms',
        loadComponent: () =>
          import('./features/legal/pages/legal-page.component').then((m) => m.LegalPageComponent),
        data: { legalKey: 'terms', title: 'Terms of Service' },
      },
      {
        path: 'cookies',
        loadComponent: () =>
          import('./features/legal/pages/legal-page.component').then((m) => m.LegalPageComponent),
        data: { legalKey: 'cookies', title: 'Cookie Policy' },
      },
      {
        path: '**',
        loadComponent: () =>
          import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
        data: { title: 'Page Not Found' },
      },
    ],
  },
];
