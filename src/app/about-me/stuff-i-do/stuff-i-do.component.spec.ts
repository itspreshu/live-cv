import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffIDoComponent } from './stuff-i-do.component';

describe('StuffIDoComponent', () => {
  let component: StuffIDoComponent;
  let fixture: ComponentFixture<StuffIDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffIDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuffIDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
