import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTemplateComponent } from './library-template.component';

describe('LibraryTemplateComponent', () => {
  let component: LibraryTemplateComponent;
  let fixture: ComponentFixture<LibraryTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
