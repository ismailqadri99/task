import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthGaurdService } from '../Service/auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthGaurdService: jasmine.SpyObj<AuthGaurdService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockAuthGaurdService = jasmine.createSpyObj('AuthGaurdService', ['login']);
    mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthGaurdService, useValue: mockAuthGaurdService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call login method with correct credentials and navigate to /myReceiver', () => {
    const loginData = { email: 'asd@dcf', password: 'qwerty' };
    mockAuthGaurdService.login.and.returnValue(of({}));

    component.Login(loginData);

    expect(mockAuthGaurdService.login).toHaveBeenCalledWith(loginData);
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/myReceiver');
  });

  it('should handle error when login fails', () => {
    const loginData = { email: 'asd@dcf', password: 'qwerty' };
    const error = new Error('Invalid credentials');
    mockAuthGaurdService.login.and.returnValue(throwError(error));

    spyOn(console, 'log');

    component.Login(loginData);

    expect(mockAuthGaurdService.login).toHaveBeenCalledWith(loginData);
    expect(mockRouter.navigateByUrl).not.toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('wrong credentials');
  });
});