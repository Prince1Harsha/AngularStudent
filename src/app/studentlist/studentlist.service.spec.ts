import { TestBed } from '@angular/core/testing';

import { StudentlistService } from './studentlist.service';

describe('StudentlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentlistService = TestBed.get(StudentlistService);
    expect(service).toBeTruthy();
  });
});
