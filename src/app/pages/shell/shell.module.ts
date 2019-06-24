import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShellPage } from './shell.page';

const routes: Routes = [
  {
    path: '',
    component: ShellPage,
    children: [
      { path: 'chores-dashboard', loadChildren: '../chores-dashboard/chores-dashboard.module#ChoresDashboardPageModule' },
      { path: 'my-account', loadChildren: '../my-account/my-account.module#MyAccountPageModule' },
      { path: 'activity', loadChildren: '../activity/activity.module#ActivityPageModule' },
      { path: 'switch-accounts', loadChildren: '../switch-accounts/switch-accounts.module#SwitchAccountsPageModule' },
      { path: 'help', loadChildren: '../help/help.module#HelpPageModule' },
      { path: 'account-details', loadChildren: '../account-details/account-details.module#AccountDetailsPageModule' },
      { path: '', redirectTo:'chores-dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShellPage]
})
export class ShellPageModule {}
