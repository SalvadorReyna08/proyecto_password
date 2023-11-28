import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAleatoriaComponent } from './password-aleatoria.component';

describe('PasswordAleatoriaComponent', () => {
  let component: PasswordAleatoriaComponent;
  let fixture: ComponentFixture<PasswordAleatoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordAleatoriaComponent]
    });
    fixture = TestBed.createComponent(PasswordAleatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
