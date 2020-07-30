import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDatosLaboralesComponent } from './profile-datos-laborales.component';

describe('ProfileDatosLaboralesComponent', () => {
  let component: ProfileDatosLaboralesComponent;
  let fixture: ComponentFixture<ProfileDatosLaboralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDatosLaboralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDatosLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
