import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../countries.interface'
import { map, switchMap, mergeMap } from 'rxjs/operators'
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public url = 'https://restcountries.eu/rest/v2/all'

  constructor(private http:HttpClient) {

   }
   public getCountries(){
     return this.http.get(this.url).pipe(
      mergeMap((countries:Country[]) => from(countries).pipe(
        map((country)=> country.name)
      ))
      )
   }
}
