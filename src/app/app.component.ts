import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/list',
      icon: 'logo-npm'
    },
    {
      title: 'Photos',
      url: '/list',
      icon: 'logo-nodejs'
    },
    {
      title: 'Available Missions',
      url: '/list',
      icon: 'logo-sass'
    },
    {
      title: 'My Missions',
      url: '/list',
      icon: 'logo-playstation'
    },
    {
      title: 'Chat',
      url: '/list',
      icon: 'logo-javascript'
    },
    {
      title: 'Log Out',
      url: '/list',
      icon: 'log-out'
    }
  ];

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
