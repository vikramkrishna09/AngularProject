import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreateAdminComponent } from './event-create-admin.component';

describe('EventCreateAdminComponent', () => {
  let component: EventCreateAdminComponent;
  let fixture: ComponentFixture<EventCreateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCreateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCreateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
