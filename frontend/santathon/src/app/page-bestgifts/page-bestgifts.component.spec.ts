import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBestgiftsComponent } from './page-bestgifts.component';

describe('PageBestgiftsComponent', () => {
  let component: PageBestgiftsComponent;
  let fixture: ComponentFixture<PageBestgiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBestgiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBestgiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
