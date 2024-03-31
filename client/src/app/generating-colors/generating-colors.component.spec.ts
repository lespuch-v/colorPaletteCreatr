import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingColorsComponent } from './generating-colors.component';

describe('GeneratingColorsComponent', () => {
  let component: GeneratingColorsComponent;
  let fixture: ComponentFixture<GeneratingColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratingColorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneratingColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
