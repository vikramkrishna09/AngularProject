import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEditAdminComponent } from './event-edit-admin.component';

describe('EventEditAdminComponent', () => {
  let component: EventEditAdminComponent;
  let fixture: ComponentFixture<EventEditAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEditAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
