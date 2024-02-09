import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoFisicaFormComponent } from './estabelecimento-fisica-form.component';

describe('EstabelecimentoFisicaFormComponent', () => {
  let component: EstabelecimentoFisicaFormComponent;
  let fixture: ComponentFixture<EstabelecimentoFisicaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentoFisicaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstabelecimentoFisicaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
