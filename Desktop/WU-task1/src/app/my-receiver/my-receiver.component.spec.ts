import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MyReceiverComponent } from "./my-receiver.component";
import { DataService } from "../Service/data/data.service";
import { Router } from "@angular/router";
import { of } from "rxjs";

describe("MyReceiverComponent", () => {
  let component: MyReceiverComponent;
  let fixture: ComponentFixture<MyReceiverComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const dataServiceSpy = jasmine.createSpyObj("DataService", [
      "getAllData",
      "deleteReceiver",
    ]);
    const routerSpy = jasmine.createSpyObj("Router", ["navigate"]);
    TestBed.configureTestingModule({
      declarations: [MyReceiverComponent],
      providers: [
        { provide: DataService, useValue: dataServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    fixture = TestBed.createComponent(MyReceiverComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to addReceiver on addReceiver()", () => {
    component.addReceiver();
    expect(router.navigate).toHaveBeenCalledWith(["/addReceiver"]);
  });

  it("should log receiverData on ngDocheck", () => {
    spyOn(console, "log"); // Spy on console.log
    component.ngDocheck();
    expect(console.log).toHaveBeenCalledWith(component.receiverData);
  });
  
});
