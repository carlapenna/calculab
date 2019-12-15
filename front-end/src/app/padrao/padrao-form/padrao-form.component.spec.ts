import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadraoFormComponent } from './padrao-form.component';

describe('PadraoFormComponent', () => {
  let component: PadraoFormComponent;
  let fixture: ComponentFixture<PadraoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadraoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadraoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
