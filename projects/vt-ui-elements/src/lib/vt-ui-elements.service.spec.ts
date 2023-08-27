import { TestBed } from '@angular/core/testing';

import { VtUiElementsService } from './vt-ui-elements.service';

describe('VtUiElementsService', () => {
  let service: VtUiElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VtUiElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
