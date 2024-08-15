import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacttosTemplateComponent } from './pacttos-template.component';

describe('PacttosTemplateComponent', () => {
  let component: PacttosTemplateComponent;
  let fixture: ComponentFixture<PacttosTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacttosTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacttosTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
