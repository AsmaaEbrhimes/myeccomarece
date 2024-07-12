import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpennerComponent } from './spenner.component';

describe('SpennerComponent', () => {
  let component: SpennerComponent;
  let fixture: ComponentFixture<SpennerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpennerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpennerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
