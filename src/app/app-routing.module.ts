import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EnrollmentCanLoadGuard as MenuDisableGuard } from './guards/enrollment-can-load.guard';
import { AppCanActivateGuard as AppLifecyleGuard } from './guards/app-can-activate.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [MenuDisableGuard],
    canLoad: [MenuDisableGuard],
    children: [
      { path: '', redirectTo: 'enrollment', pathMatch: 'full' },
      {
        path: 'enrollment',
        loadChildren: './pages/enrollment/enrollment.module#EnrollmentPageModule',
      },
      {
        path: 'batch-processes',
        loadChildren: './pages/batch-processes/batch-processes.module#BatchProcessesPageModule',
      },
      {
        path: 'switch-accounts',
        loadChildren: './pages/switch-accounts/switch-accounts.module#SwitchAccountsPageModule',
      },
      { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' }

    ]
  },
  {
    path: 'app',
    canActivateChild: [AppLifecyleGuard],
    children: [
      {
        path: 'chores-dashboard',
        loadChildren:
          './pages/chores-dashboard/chores-dashboard.module#ChoresDashboardPageModule'
      },
      {
        path: 'my-account',
        loadChildren: './pages/my-account/my-account.module#MyAccountPageModule'
      },
      {
        path: 'activity',
        loadChildren: './pages/activity/activity.module#ActivityPageModule'
      },
      { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
      {
        path: 'account-details',
        loadChildren:
          './pages/account-details/account-details.module#AccountDetailsPageModule'
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
