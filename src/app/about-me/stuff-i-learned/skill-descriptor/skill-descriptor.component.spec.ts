import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDescriptorComponent } from './skill-descriptor.component';

describe('SkillDescriptorComponent', () => {
  let component: SkillDescriptorComponent;
  let fixture: ComponentFixture<SkillDescriptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillDescriptorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillDescriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
