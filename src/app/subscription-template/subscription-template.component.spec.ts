import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionTemplateComponent } from './subscription-template.component';

describe('SubscriptionTemplateComponent', () => {
  let component: SubscriptionTemplateComponent;
  let fixture: ComponentFixture<SubscriptionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
