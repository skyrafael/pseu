import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPseuComponent } from './navbar-pseu.component';

describe('NavbarPseuComponent', () => {
  let component: NavbarPseuComponent;
  let fixture: ComponentFixture<NavbarPseuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPseuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPseuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
