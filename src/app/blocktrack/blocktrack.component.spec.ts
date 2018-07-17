import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocktrackComponent } from './blocktrack.component';

describe('BlocktrackComponent', () => {
  let component: BlocktrackComponent;
  let fixture: ComponentFixture<BlocktrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocktrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocktrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
