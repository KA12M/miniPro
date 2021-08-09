import { TestBed } from '@angular/core/testing';

import { LinkAllService } from './link-all.service';

describe('LinkAllService', () => {
  let service: LinkAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
