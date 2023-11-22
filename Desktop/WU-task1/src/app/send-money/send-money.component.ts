import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data/data.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.css']
})
export class SendMoneyComponent implements OnInit {
  // countries:any []=[];
  dropdown: any[]=[];
  selectedCountry: string;
  countryData: any = {};
  countries: any = [];
  receiverList: Array<Object> = [];
  countryCodes: any ={};

SendMoney() {

}
  constructor(private data:DataService, private http: HttpClient) { }

  // ngOnInit() {
  //   this.data.getCountriesFlag().subscribe((data) => {
  //     this.dropdown = data;
  //     // Log the URLs without the json pipe
  //     console.log('Country Flags:', data.map(country => country.flag));
  //   })
  // }

  ngOnInit(): void {
    forkJoin({
      countryConfig: this.data.getConfig(),
      receivers: this.data.getReceivers()
    }).subscribe({
      next: (results: { countryConfig: Array<Object>, receivers: Array<Object> }) => {
        this.countryData = results.countryConfig;
        // console.warn("Country Data:", this.countryData);
   
        this.countries = Object.keys(this.countryData[0]);
        // console.log("Countries:", this.countries);
        // console.log("Selected Country:", this.selectedCountry);
        this.receiverList = results.receivers;
        console.log("Receiver List:", this.receiverList);
      }
    });
  }

  // ngOnInit(): void {
  //   this.data.getConfig().subscribe((data: Array<Object>) => {
  //     this.countryData = data;
  //     this.countries = Object.keys(this.countryData[0]);
  //   });

  //   this.data.getReceivers().subscribe((result: Array<Object>) => {
  //     this.receiverList = result;
  //   });
  // }

}
