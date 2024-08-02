import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffILearnedComponent } from './stuff-i-learned.component';

describe('StuffILearnedComponent', () => {
  let component: StuffILearnedComponent;
  let fixture: ComponentFixture<StuffILearnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffILearnedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffILearnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
