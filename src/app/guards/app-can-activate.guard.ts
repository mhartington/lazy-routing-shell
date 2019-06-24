import { Injectable } from '@angular/core';
import { CanActivateChild, CanDeactivate } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AppCanActivateGuard implements CanActivateChild, CanDeactivate<boolean> {
  constructor(private menuCtrl: MenuController) {}
  async canActivateChild(){
    await this.menuCtrl.enable(true);
    return true;
  }
  async canDeactivate(){
    await this.menuCtrl.enable(false);
    return true;
  }
}
