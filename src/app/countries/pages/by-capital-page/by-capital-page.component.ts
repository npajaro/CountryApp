import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor ( private countriesService: CountriesService ){}

  public searchByCapital( term: string ): void {
    this.countriesService.SearchCapital( term)
    .subscribe( countries => {
      this.countries = countries;
    });
  }

}

