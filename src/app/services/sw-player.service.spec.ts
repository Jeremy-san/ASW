import { TestBed } from '@angular/core/testing';

import { SwPlayerService } from './sw-player.service';

describe('SwPlayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwPlayerService = TestBed.get(SwPlayerService);
    expect(service).toBeTruthy();
  });
});
