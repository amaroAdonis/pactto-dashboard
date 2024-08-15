import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInfoTemplateComponent } from './personal-info-template.component';

describe('PersonalInfoTemplateComponent', () => {
  let component: PersonalInfoTemplateComponent;
  let fixture: ComponentFixture<PersonalInfoTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalInfoTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInfoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
