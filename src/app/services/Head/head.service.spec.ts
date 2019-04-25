import { TestBed } from '@angular/core/testing';

import { Head } from './head.service';

describe('Head', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Head = TestBed.get(Head);
    expect(service).toBeTruthy();
  });
});
