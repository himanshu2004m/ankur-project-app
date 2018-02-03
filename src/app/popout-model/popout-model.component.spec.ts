import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoutModelComponent } from './popout-model.component';

describe('PopoutModelComponent', () => {
  let component: PopoutModelComponent;
  let fixture: ComponentFixture<PopoutModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoutModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoutModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
