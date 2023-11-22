import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { EditComponent } from './edit.component';
import { DataService } from '../Service/data/data.service';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;
  let formMock: NgForm;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], { snapshot: { params: { id: '1' } } });
    dataServiceSpy = jasmine.createSpyObj('DataService', ['updateReceiverId', 'getReceiverId', 'getConfig']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [EditComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: DataService, useValue: dataServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    formMock = <NgForm>{ value: {} };

    dataServiceSpy.getReceiverId.and.returnValue(of({ id: '1', name: 'Receiver 1' }));
    dataServiceSpy.getConfig.and.returnValue(of([{ USA: { isReqMidName: true, isReqLastName: true } }]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if selected country is USA and isReqMidName is true', () => {
    component.selectedCountry = 'USA';
    component.countryData = [{
      USA: {
        isReqMidName: true
      }
    }];
    expect(component.isReqMidName()).toBe(true);
  });

  it('should return true if selected country is India and isReqMidName is true', () => {
    component.selectedCountry = 'India';
    component.countryData = [{
      India: {
        isReqMidName: true
      }
    }];
    expect(component.isReqMidName()).toBe(true);
  });

  it('should return true if selected country is Dubai and isReqMidName is true', () => {
    component.selectedCountry = 'Dubai';
    component.countryData = [{
      Dubai: {
        isReqMidName: true
      }
    }];
    expect(component.isReqMidName()).toBe(true);
  });

  it('should return true if selected country is Qatar and isReqMidName is true', () => {
    component.selectedCountry = 'Qatar';
    component.countryData = [{
      Qatar: {
        isReqMidName: true
      }
    }];
    expect(component.isReqMidName()).toBe(true);
  });

  it('should return false if selected country is not in the switch cases', () => {
    component.selectedCountry = 'Germany'; // Country not in the switch cases
    component.countryData = [];
    expect(component.isReqMidName()).toBe(false);
  });

});