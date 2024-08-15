import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLinksTemplateComponent } from './shared-links-template.component';

describe('SharedLinksTemplateComponent', () => {
  let component: SharedLinksTemplateComponent;
  let fixture: ComponentFixture<SharedLinksTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLinksTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLinksTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
