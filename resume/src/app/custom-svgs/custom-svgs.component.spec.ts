import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSvgsComponent } from './custom-svgs.component';

describe('CustomSvgsComponent', () => {
  let component: CustomSvgsComponent;
  let fixture: ComponentFixture<CustomSvgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSvgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSvgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
