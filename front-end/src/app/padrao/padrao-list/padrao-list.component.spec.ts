import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadraoListComponent } from './padrao-list.component';

describe('PadraoListComponent', () => {
  let component: PadraoListComponent;
  let fixture: ComponentFixture<PadraoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadraoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadraoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
