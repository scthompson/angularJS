import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridviewHomeComponent } from './gridview-home.component';

describe('GridviewHomeComponent', () => {
  let component: GridviewHomeComponent;
  let fixture: ComponentFixture<GridviewHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridviewHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridviewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
