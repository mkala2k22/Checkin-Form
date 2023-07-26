import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckinComponent } from './checkin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Apollo, ApolloModule } from 'apollo-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CheckinComponent', () => {
  let component: CheckinComponent;
  let fixture: ComponentFixture<CheckinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [HttpClientTestingModule, ApolloModule, FormsModule, ReactiveFormsModule],
      declarations: [CheckinComponent]
    });
    fixture = TestBed.createComponent(CheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
