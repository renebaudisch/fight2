import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlairfireComponent } from './flairfire.component';

describe('FlairfireComponent', () => {
  let component: FlairfireComponent;
  let fixture: ComponentFixture<FlairfireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlairfireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlairfireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
