import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinformComponent } from './checkinform.component';

describe('CheckinformComponent', () => {
  let component: CheckinformComponent;
  let fixture: ComponentFixture<CheckinformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckinformComponent]
    });
    fixture = TestBed.createComponent(CheckinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
