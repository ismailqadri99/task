import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url='http://localhost:3000/CurrentData';
  configurl="http://localhost:3000/country";
  countriesFlag="https://countriesnow.space/api/v0.1/countries/flag/images"

  constructor( private http: HttpClient) { }

  getReceivers(){
    console.log("receivers list");
    return this.http.get(this.url)
    
  }
  getAllData(){
    return this.http.get(this.url);
  }

  deleteReceiver(Id:number){
    return this.http.delete(`${this.url}/${Id}`)
  }

  getReceiverId(Id:number){
    return this.http.get(`${this.url}/${Id}`);
  }

  updateReceiverId(Id: number, res: any){
    return this.http.put(`${this.url}/${Id}`, res)
  }

  getConfig(){
    return this.http.get(this.configurl);
   }

   getCountriesFlag(): Observable<{ name: string, flag: any }[]> {
    return this.http.get<any>(this.countriesFlag).pipe(
      map(response => {
        const countries = response.data.slice(1).map(country => ({
          name: country.name,
          flag: country.flag
        }));
        return countries;
      })
    );
  }

}
