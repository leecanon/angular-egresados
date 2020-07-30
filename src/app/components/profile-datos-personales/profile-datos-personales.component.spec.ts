import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDatosPersonalesComponent } from './profile-datos-personales.component';

describe('ProfileDatosPersonalesComponent', () => {
  let component: ProfileDatosPersonalesComponent;
  let fixture: ComponentFixture<ProfileDatosPersonalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDatosPersonalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
