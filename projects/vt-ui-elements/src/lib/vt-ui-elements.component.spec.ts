import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtUiElementsComponent } from './vt-ui-elements.component';

describe('VtUiElementsComponent', () => {
  let component: VtUiElementsComponent;
  let fixture: ComponentFixture<VtUiElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VtUiElementsComponent]
    });
    fixture = TestBed.createComponent(VtUiElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
