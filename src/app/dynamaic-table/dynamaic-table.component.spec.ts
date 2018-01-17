import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamaicTableComponent } from './dynamaic-table.component';

describe('DynamaicTableComponent', () => {
  let component: DynamaicTableComponent;
  let fixture: ComponentFixture<DynamaicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamaicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamaicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
