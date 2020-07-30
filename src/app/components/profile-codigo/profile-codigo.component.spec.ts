import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCodigoComponent } from './profile-codigo.component';

describe('ProfileCodigoComponent', () => {
  let component: ProfileCodigoComponent;
  let fixture: ComponentFixture<ProfileCodigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCodigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
