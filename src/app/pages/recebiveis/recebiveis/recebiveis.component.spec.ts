import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebiveisComponent } from './recebiveis.component';

describe('RecebiveisComponent', () => {
  let component: RecebiveisComponent;
  let fixture: ComponentFixture<RecebiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecebiveisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecebiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
