import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {

  public countries: Country[] = [];


  constructor ( private countriesService: CountriesService ) {}

  public searchByRegion(term: string): void{
    this.countriesService.SearchRegion( term )
    .subscribe( countries =>{
      this.countries = countries;
    });
  }

}
