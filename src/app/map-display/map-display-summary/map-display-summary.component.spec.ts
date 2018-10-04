import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDisplaySummaryComponent } from './map-display-summary.component';

describe('MapDisplaySummaryComponent', () => {
  let component: MapDisplaySummaryComponent;
  let fixture: ComponentFixture<MapDisplaySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDisplaySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDisplaySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
