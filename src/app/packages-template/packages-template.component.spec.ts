import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesTemplateComponent } from './packages-template.component';

describe('PackagesTemplateComponent', () => {
  let component: PackagesTemplateComponent;
  let fixture: ComponentFixture<PackagesTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagesTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagesTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
