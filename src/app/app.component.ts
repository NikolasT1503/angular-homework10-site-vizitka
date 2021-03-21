import { Component } from '@angular/core';
import { slideInAnimation } from './animation';
import { NavigationEnd, NavigationStart, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from "@angular/common"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'angular-homework10-site-vizitka';

  navbarOpen = true;
  
  constructor(private router: Router, private _location: Location){}

  goBack() {
    /* this.router.navigate(['main']); */
    /* let backUrl: String;
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(async ({ urlAfterRedirects }: NavigationEnd) => {
        backUrl=urlAfterRedirects;
        console.log(urlAfterRedirects);
    });
    this.router.navigate([backUrl]); */
    this._location.back();
  }

  goForward(){
    /* this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(async ({ url }: NavigationEnd) => {
        console.log(url);
    }); */
    this._location.forward();

  }

/*   goBack(){
    this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe(e => {
      const navigation = this.router.getCurrentNavigation();
      tracingService.trace({id: navigation.extras.state.tracingId});
    });    
  } */



  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    console.log('navbarOpen', this.navbarOpen);
  }
  
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
