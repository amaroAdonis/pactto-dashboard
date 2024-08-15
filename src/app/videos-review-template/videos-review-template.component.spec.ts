import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosReviewTemplateComponent } from './videos-review-template.component';

describe('VideosReviewTemplateComponent', () => {
  let component: VideosReviewTemplateComponent;
  let fixture: ComponentFixture<VideosReviewTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosReviewTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosReviewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
