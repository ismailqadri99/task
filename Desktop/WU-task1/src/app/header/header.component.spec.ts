import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router, NavigationEnd, RouterEvent } from "@angular/router";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the Western Union logo and title", () => {
    const logoImg = fixture.debugElement.query(
      By.css(".logo img")
    ).nativeElement;
    expect(logoImg.getAttribute("src")).toBe("assets/logo.jpg");
    expect(logoImg.getAttribute("alt")).toBe("brand");

    const titleText = fixture.debugElement.query(By.css(".logo h2"))
      .nativeElement.textContent;
    expect(titleText).toBe("Western Union");
  });

  it("should set changeHeader to true for /login route", () => {
    const routerEvent: RouterEvent = new NavigationEnd(1, "/login", "/login");

    spyOn(router.events, "pipe").and.returnValue(of(routerEvent as any));

    component.ngOnInit();

    expect(component.changeHeader).toBe(true);
  });

  it("should set changeHeader to true for / route", () => {
    const routerEvent: RouterEvent = new NavigationEnd(1, "/", "/");

    spyOn(router.events, "pipe").and.returnValue(of(routerEvent as any));

    component.ngOnInit();

    expect(component.changeHeader).toBe(true);
  });
});
