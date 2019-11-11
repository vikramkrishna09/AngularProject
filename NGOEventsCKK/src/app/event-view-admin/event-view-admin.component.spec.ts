import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewAdminComponent } from './event-view-admin.component';

describe('EventViewAdminComponent', () => {
  let component: EventViewAdminComponent;
  let fixture: ComponentFixture<EventViewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventViewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
