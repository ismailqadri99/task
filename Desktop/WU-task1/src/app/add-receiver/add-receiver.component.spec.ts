import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { AddReceiverComponent } from "./add-receiver.component";

describe("AddReceiverComponent", () => {
  let component: AddReceiverComponent;
  let fixture: ComponentFixture<AddReceiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReceiverComponent],
      imports: [HttpClientTestingModule, FormsModule, RouterTestingModule],
    });
    fixture = TestBed.createComponent(AddReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it("should create the component", () => {
  //   expect(component).toBeTruthy();
  // });

  // it("should set isFormSubmitted to true on form submission", () => {
  //   const formValue = {
  //     phone: "1234567890",
  //   };
  //   component.OnClick({
  //     value: formValue,
  //     invalid: false,
  //   } as any);
  //   expect(component.isFormSubmitted).toBe(true);
  // });

  // it("should show alert if form is invalid", () => {
  //   spyOn(window, "alert");
  //   const formValue = {
  //     phone: "invalid",
  //   };
  //   component.OnClick({
  //     value: formValue,
  //     invalid: true,
  //   } as any);
  //   expect(window.alert).toHaveBeenCalledWith("Please fill all the details");
  // });

  // it("should return true for a valid phone number", () => {
  //   const validPhoneNumber = "1234567890";
  //   const result = component.isPhoneNumberValid(validPhoneNumber);
  //   expect(result).toBe(true);
  // });

  // it("should return false for an invalid phone number", () => {
  //   const invalidPhoneNumber = "invalid";
  //   const result = component.isPhoneNumberValid(invalidPhoneNumber);
  //   expect(result).toBe(false);
  // });

  // it('should return true if selected country is USA and isReqMidName is true', () => {
  //   component.selectedCountry = 'USA';
  //   component.countryData = [{
  //     USA: {
  //       isReqMidName: true
  //     }
  //   }];
  //   expect(component.isReqMidName()).toBe(true);
  // });

  // it('should return true if selected country is India and isReqMidName is true', () => {
  //   component.selectedCountry = 'India';
  //   component.countryData = [{
  //     India: {
  //       isReqMidName: true
  //     }
  //   }];
  //   expect(component.isReqMidName()).toBe(true);
  // });

  // it('should return true if selected country is Dubai and isReqMidName is true', () => {
  //   component.selectedCountry = 'Dubai';
  //   component.countryData = [{
  //     Dubai: {
  //       isReqMidName: true
  //     }
  //   }];
  //   expect(component.isReqMidName()).toBe(true);
  // });

  // it('should return true if selected country is Qatar and isReqMidName is true', () => {
  //   component.selectedCountry = 'Qatar';
  //   component.countryData = [{
  //     Qatar: {
  //       isReqMidName: true
  //     }
  //   }];
  //   expect(component.isReqMidName()).toBe(true);
  // });

  // it('should return false if selected country is not in the switch cases', () => {
  //   component.selectedCountry = 'Germany'; 
  //   component.countryData = [];
  //   expect(component.isReqMidName()).toBe(false);
  // });
  
});
