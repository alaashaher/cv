import { WorkExperienceComponent } from './pages/workExrerience/work-experience.component';

import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: 'WorkExperience',
        loadChildren: './pages/workExrerience/work-experience.module#WorkExperienceModule'
    },
    {
        path: 'HeaderComponent',
        loadChildren: './pages/header/Header.module#HeaderModule'
    }
];
