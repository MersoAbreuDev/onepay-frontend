import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotAuthComponent } from './page-not-auth.component';

describe('PageNotAuthComponent', () => {
  let component: PageNotAuthComponent;
  let fixture: ComponentFixture<PageNotAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageNotAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
