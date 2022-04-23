import { TestBed } from '@angular/core/testing';

import { ModalWithFactoryService } from './modal.service';

describe('ModalService', () => {
  let service: ModalWithFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalWithFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
