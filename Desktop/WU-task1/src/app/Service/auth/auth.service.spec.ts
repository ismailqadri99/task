import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGaurdService } from './auth.service';
import { of, throwError } from 'rxjs';

describe('AuthGaurdService', () => {
  let service: AuthGaurdService;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGaurdService,
        { provide: Router, useValue: routerSpyObj }
      ]
    });
    service = TestBed.inject(AuthGaurdService);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

    it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should set loggedIn to true and return user data on successful login', () => {
    const loginValue = { email: 'asd@dcf', password: 'qwerty' };

    service.login(loginValue).subscribe(user => {
      expect(user).toEqual({ name: 'ismail', email: 'asd@dcf' });
      expect(service.LoggedIn()).toBeTrue();
    });
  });

  it('should set loggedIn to false and navigate to login page on sign out', () => {
    service.signOut();

    expect(service.LoggedIn()).toBeFalse();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should throw an error on failed login attempt', () => {
    const loginValue = { email: 'invalid@dcf', password: 'invalid' };

    service.login(loginValue).subscribe(
      () => fail('Expected error to be thrown'),
      error => expect(error.message).toEqual('Failed to Login')
    );
  });
});


