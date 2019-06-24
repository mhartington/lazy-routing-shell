import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CanLoad, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentCanLoadGuard implements CanActivate, CanLoad {
  constructor(private menuCtrl: MenuController) {}
  async canLoad() {
    await this.menuCtrl.enable(false);
    return true;
  }
  async canActivate() {
    await this.menuCtrl.enable(false);
    return true;
  }
}
