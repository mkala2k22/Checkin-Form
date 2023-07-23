import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckinComponent } from './checkin.component';
import { HttpClient } from '@angular/common/http';
import { CheckinAuthService } from '../service/checkin-auth.service';
import { Observable, of } from 'rxjs';


describe('CheckinComponent', () => {
  let component: CheckinComponent;
  let fixture: ComponentFixture<CheckinComponent>;
  let checkInServiceStub : any;

  beforeEach(() => {
    checkInServiceStub = {
      authenticateCheckin(): Observable<any[]>{
        return of([
          {
            "status": "Success",
            "message": "Successful Checkin",
            "data": {
                "bookingData": [
                    {
                        "bookingCode": 123456,
                        "lastName": "Kala"
                    },
                    {
                        "bookingCode": 223456,
                        "lastName": "Kabadwal"
                    },
                    {
                        "bookingCode": 323456,
                        "lastName": "Kalia"
                    }
                ]
            }
        }
        ]);
      }
    }
    TestBed.configureTestingModule({
      declarations: [CheckinComponent],
      providers: [
        {provide : CheckinAuthService,
         useValue: checkInServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(CheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get data from service ', () => {
    component.proceedCheckin();
    expect(component.content).toEqual([
      {
        "status": "Success",
        "message": "Successful Checkin",
        "data": {
            "bookingData": [
                {
                    "bookingCode": 123456,
                    "lastName": "Kala"
                },
                {
                    "bookingCode": 223456,
                    "lastName": "Kabadwal"
                },
                {
                    "bookingCode": 323456,
                    "lastName": "Kalia"
                }
            ]
        }
    }
    ]);
  });
});
