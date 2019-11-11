import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRegUserComponent } from './event-reg-user.component';

describe('EventRegUserComponent', () => {
  let component: EventRegUserComponent;
  let fixture: ComponentFixture<EventRegUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRegUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRegUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
