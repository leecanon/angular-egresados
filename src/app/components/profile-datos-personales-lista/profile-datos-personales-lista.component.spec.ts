import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDatosPersonalesListaComponent } from './profile-datos-personales-lista.component';

describe('ProfileDatosPersonalesListaComponent', () => {
  let component: ProfileDatosPersonalesListaComponent;
  let fixture: ComponentFixture<ProfileDatosPersonalesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDatosPersonalesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDatosPersonalesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
