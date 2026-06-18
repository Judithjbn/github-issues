import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
        {
            path: '',
            component: MainLayout,
            children: [
                {
                    path: '',
                    loadComponent: () => import('./views/issues/pages/issues-list/issues-list').then((m) => m.IssuesList)
                }
            ]
        },
        {
            path: 'issues-detail/:id',
            loadComponent: () => import('./views/issues/pages/issues-detail/issues-detail').then((m) => m.IssuesDetail)
        },
        {
            path: '**',
            redirectTo: 'issues-list'
        }
];
