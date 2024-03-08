import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoTableComponent } from './estabelecimento-table.component';

describe('EstabelecimentoTableComponent', () => {
  let component: EstabelecimentoTableComponent;
  let fixture: ComponentFixture<EstabelecimentoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentoTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstabelecimentoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
