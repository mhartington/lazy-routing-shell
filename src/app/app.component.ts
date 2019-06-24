import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public pages = [
    { url: '/app/chores-dashboard', title: 'Dashboard' },
    { url: '/app/my-account',       title: 'My Account' },
    { url: '/app/activity',         title: 'Activity' },
    { url: '/switch-accounts',  title: 'Switch Accounts' },
    { url: '/app/help',             title: 'Help' },
    { url: '/enrollment',       title: 'Enrollment' }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
