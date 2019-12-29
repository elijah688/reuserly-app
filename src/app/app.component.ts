import { Component, HostListener } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.sass']
})
export class AppComponent {
  stores = [
    {
      'title': 'Straws',
      'icon': 'color-wand',
      'link' : '/straws',
      'color': '#E63135'
    },
    {
      'title': 'Protectors',
      'icon': 'phone-portrait',
      'link' : '/protector',
      'color': '#0CA9EA'
    },
    {
      'title': 'Reuserly Books',
      'icon': 'book',
      'link' : '/books',
      'color': '#F46529'
    },
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
