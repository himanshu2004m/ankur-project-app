import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoTagLocationComponent } from './geo-tag-location.component';

describe('GeoTagLocationComponent', () => {
  let component: GeoTagLocationComponent;
  let fixture: ComponentFixture<GeoTagLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoTagLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoTagLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
