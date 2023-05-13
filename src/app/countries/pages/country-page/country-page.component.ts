import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
    ) {}

  ngOnInit(): void {


    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countriesService.seacrhCountryByAlphaCode( id )  )
      )
      .subscribe( country => {
        if ( !country)  return this.router.navigateByUrl('');
        return this.country = country;
      } );
    }
}
