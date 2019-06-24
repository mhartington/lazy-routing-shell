import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BatchProcessesPage } from './batch-processes.page';

const routes: Routes = [
  {
    path: '',
    component: BatchProcessesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BatchProcessesPage]
})
export class BatchProcessesPageModule {}
