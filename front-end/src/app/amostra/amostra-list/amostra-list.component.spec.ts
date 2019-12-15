import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmostraListComponent } from './amostra-list.component';

describe('AmostraListComponent', () => {
  let component: AmostraListComponent;
  let fixture: ComponentFixture<AmostraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmostraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmostraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
