import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Service/data/data.service';
import { AbstractControl, NgForm, ValidationErrors, ValidatorFn } from '@angular/forms';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-add-receiver',
  templateUrl: './add-receiver.component.html',
  styleUrls: ['./add-receiver.component.css']
})
export class AddReceiverComponent implements OnInit{

  selectedCountry: string;
  countryData: any = {};
  countries: any = [];
  receiverList: Array<Object> = [];
  countryCodes: any ={};

  isFormSubmitted=false;
  CodeField: any;
  
  constructor(private router: Router, private http: HttpClient, private data: DataService) { }

  isPhoneNumberValid(value :string): boolean {
    return /^\d{10}$/.test(value);
  }

  isString(value: any): boolean{
    return typeof value === 'string';
  }
  OnClick(form: NgForm): void {
    this.isFormSubmitted=true;
    if(form.invalid 
      // ||  !this.isPhoneNumberValid(form.value.phone)
    ){
      alert("Please fill all the details");
    }
    else{
      this.addReceiver(form.value);
    }
  }
  addReceiver(user: any){
    console.log(user);
      this.http.post("http://localhost:3000/CurrentData",user)
          .subscribe((result)=>{
            console.log(result);
            alert("Receiver data added");
            this.router.navigateByUrl('/myReceiver');
          })
}

isReqMidName(): boolean {
  const countryData = this.countryData[0][this.selectedCountry];
  return countryData ? countryData.isReqLastName : false;
}

isReqLastName(): boolean {
  const countryData = this.countryData[0][this.selectedCountry];
  return countryData ? countryData.isReqLastName : false;
}
 
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
CountryCode(): void {
  const selectedCountryData = this.countryData.find(country => country[this.selectedCountry]);
  if (selectedCountryData) {
    this.countryCodes = selectedCountryData[this.selectedCountry];
  }
}

ngDocheck(): void {
  console.log(this.isReqMidName());


}
}
