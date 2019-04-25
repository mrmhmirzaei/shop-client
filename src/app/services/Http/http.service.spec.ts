import { TestBed } from '@angular/core/testing';

import { Http } from './http.service';

describe('Http', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Http = TestBed.get(Http);
    expect(service).toBeTruthy();
  });
});
