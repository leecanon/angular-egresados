import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDatosUniversitariosComponent } from './profile-datos-universitarios.component';

describe('ProfileDatosUniversitariosComponent', () => {
  let component: ProfileDatosUniversitariosComponent;
  let fixture: ComponentFixture<ProfileDatosUniversitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDatosUniversitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDatosUniversitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
