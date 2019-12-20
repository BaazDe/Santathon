import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloCardComponent } from './solo-card.component';

describe('SoloCardComponent', () => {
  let component: SoloCardComponent;
  let fixture: ComponentFixture<SoloCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoloCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoloCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
