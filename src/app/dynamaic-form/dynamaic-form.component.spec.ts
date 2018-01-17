import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamaicFormComponent } from './dynamaic-form.component';

describe('DynamaicFormComponent', () => {
  let component: DynamaicFormComponent;
  let fixture: ComponentFixture<DynamaicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamaicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamaicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
