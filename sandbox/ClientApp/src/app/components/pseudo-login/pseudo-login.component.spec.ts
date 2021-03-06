import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoLoginComponent } from './pseudo-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('PseudoLoginComponent', () => {
  let component: PseudoLoginComponent;
  let fixture: ComponentFixture<PseudoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PseudoLoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
