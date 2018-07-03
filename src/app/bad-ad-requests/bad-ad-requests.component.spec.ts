import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadAdRequestsComponent } from './bad-ad-requests.component';

describe('BadAdRequestsComponent', () => {
  let component: BadAdRequestsComponent;
  let fixture: ComponentFixture<BadAdRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadAdRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadAdRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
