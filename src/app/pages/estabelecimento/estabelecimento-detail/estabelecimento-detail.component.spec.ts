import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoDetailComponent } from './estabelecimento-detail.component';

describe('EstabelecimentoDetailComponent', () => {
  let component: EstabelecimentoDetailComponent;
  let fixture: ComponentFixture<EstabelecimentoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstabelecimentoDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstabelecimentoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
