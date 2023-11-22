import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthGaurdService } from '../Service/auth/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let authService: AuthGaurdService;
  let routeSnapshot: ActivatedRouteSnapshot;
  let stateSnapshot: RouterStateSnapshot;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, AuthGaurdService]
    }).compileComponents();
  }));

  beforeEach(() => {
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthGaurdService);
    routeSnapshot = new ActivatedRouteSnapshot();
    stateSnapshot = {
      url: '/protected',
    } as RouterStateSnapshot;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });


  it('should allow access if logged in', () => {
    spyOn(authService, 'LoggedIn').and.returnValue(true);
    const navigateByUrlSpy = spyOn(router, 'navigateByUrl');

    const canActivate = guard.canActivate(routeSnapshot, stateSnapshot);
    
    expect(navigateByUrlSpy).not.toHaveBeenCalled();
    expect(canActivate).toBe(true);
  });
});
  
