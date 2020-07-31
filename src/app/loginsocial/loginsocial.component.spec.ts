import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsocialComponent } from './loginsocial.component';

describe('LoginsocialComponent', () => {
  let component: LoginsocialComponent;
  let fixture: ComponentFixture<LoginsocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginsocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

