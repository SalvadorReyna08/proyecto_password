import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSegunDatosComponent } from './password-segun-datos.component';

describe('PasswordSegunDatosComponent', () => {
  let component: PasswordSegunDatosComponent;
  let fixture: ComponentFixture<PasswordSegunDatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordSegunDatosComponent]
    });
    fixture = TestBed.createComponent(PasswordSegunDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
