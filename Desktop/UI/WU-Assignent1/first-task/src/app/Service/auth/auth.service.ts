import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGaurdService {
  loggedIn: boolean = false;
  constructor(private route: Router) {}

  signOut() {
    this.loggedIn = false;
    this.route.navigate(["/login"]);
  }
  
  LoggedIn() {
    return this.loggedIn;
  }

  login(value: any): Observable<any> {
    if (value.email === "asd@dcf" && value.password === "qwerty") {
      this.loggedIn = true;
      return of({ name: "ismail", email: "asd@dcf"});
    }
    return throwError(new Error("Failed to Login"));
  }
}
