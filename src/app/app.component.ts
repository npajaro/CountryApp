import { Component, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countryApp';

  subscription: Subscription | undefined;
  isHidden: boolean = false;

  constructor(
    public route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(_event => {
      const currentUrl = this.router.url;
      const isCountryPage = currentUrl.startsWith('/countries/by/');
      if (isCountryPage) {
        const id = currentUrl.split('/').pop();
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
    });

  }



}
