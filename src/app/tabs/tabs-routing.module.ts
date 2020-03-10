import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'jobs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../jobs/jobs.module').then(m => m.JobsPageModule)
          }
        ]
      },
      {
        path: 'investments',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../investments/investments.module').then(m => m.InvestmentsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/jobs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
