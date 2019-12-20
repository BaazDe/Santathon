import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewgiftsComponent } from './page-newgifts.component';

describe('PageNewgiftsComponent', () => {
  let component: PageNewgiftsComponent;
  let fixture: ComponentFixture<PageNewgiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewgiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewgiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
