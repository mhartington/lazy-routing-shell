import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SwitchAccountsPage } from './switch-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: SwitchAccountsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SwitchAccountsPage]
})
export class SwitchAccountsPageModule {}
