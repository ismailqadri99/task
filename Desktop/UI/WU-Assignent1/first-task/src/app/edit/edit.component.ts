import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../Service/data/data.service";
import { NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { forkJoin } from "rxjs";


@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"],
})
export class EditComponent implements OnInit {
  receiverData: any = {};
  selectedCountry: string;
  countryData: any = {};
  countries: any = [];
  receiverList: Array<Object> = [];
  countryCodes: any ={};

  isFormSubmitted = false;
  activatedRoute: any;

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private http: HttpClient,
    private data: DataService
  ) {}

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
      this.updateReceiver(form.value);
    }
  }
  updateReceiver(data: any) {
    console.log("new form data", data);
    this.data
      .updateReceiverId(this.router.snapshot.params.id, data)
      .subscribe((result) => {
        console.log(result);
        alert("Data has been updated");
        this.route.navigate(["/myReceiver"]);
      });
  }

  
  isReqMidName() {
    const country = this.selectedCountry;
    let check = false;
    console.log("country", this.selectedCountry);

    if (country && this.countryData) {
      switch (country) {
        case "USA":
          {
            check = this.countryData[0].USA.isReqMidName;
          }
          break;

        case "India":
          {
            check = this.countryData[0].India.isReqMidName;
          }
          break;

        case "Dubai":
          {
            check = this.countryData[0].Dubai.isReqMidName;
          }
          break;

        case "Qatar":
          {
            check = this.countryData[0].Qatar.isReqMidName;
          }
          break;
        default:
          check = false;
      }
    } else {
      check = true;
    }
    console.log(check);
    return check;
  }

  isReqLastName() {
    const country = this.selectedCountry;
    let check = false;
    console.log("country", this.selectedCountry);
    if (country && this.countryData) {
      switch (country) {
        case "USA":
          {
            check = this.countryData[0]?.USA?.isReqLastName;
          }
          break;

        case "India":
          {
            check = this.countryData[0].India.isReqLastName;
          }
          break;
        case "UAE":
          {
            check = this.countryData[0].Dubai.isReqLastName;
          }
          break;

        case "Qatar":
          {
            check = this.countryData[0].Qatar.isReqLastName;
          }
          break;
        default:
          check = false;
      }
    } else {
      check = true;
    }
    console.log(check);
    return check;
  }

ngOnInit(): void {
  console.log(this.router.snapshot.params.id);
  forkJoin({
    receiverData: this.data.getReceiverId(this.router.snapshot.params.id),
    countryConfig: this.data.getConfig()
  }).subscribe({
    next: (results: { receiverData: any, countryConfig: Array<Object> }) => {
      this.receiverData = results.receiverData;
      this.countryData = results.countryConfig;
      console.warn("Country Data:", this.countryData);
 
      this.countries = Object.keys(this.countryData[0]);
      console.log("Countries:", this.countries);
 
      console.log("Selected Country:", this.selectedCountry);
 
      if (this.receiverData && this.receiverData.country) {
        this.selectedCountry = this.receiverData.country;
      }
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
  }

  getRoute(){
    return this.route;
  }
}
