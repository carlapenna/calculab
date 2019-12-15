import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmostraFormComponent } from './amostra-form.component';

describe('AmostraFormComponent', () => {
  let component: AmostraFormComponent;
  let fixture: ComponentFixture<AmostraFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmostraFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmostraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
