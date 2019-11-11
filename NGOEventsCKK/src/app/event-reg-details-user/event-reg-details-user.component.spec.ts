import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegDetailsUserComponent } from './event-reg-details-user.component';

describe('EventRegDetailsUserComponent', () => {
  let component: EventRegDetailsUserComponent;
  let fixture: ComponentFixture<EventRegDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRegDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRegDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
