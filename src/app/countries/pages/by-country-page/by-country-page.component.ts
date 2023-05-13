import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor ( private countriesService: CountriesService ) {}


  public searchByCountry(term:string): void{
    this.countriesService.SearchCountry( term )
    .subscribe( countries => {
      this.countries = countries;
    });
  }

}
