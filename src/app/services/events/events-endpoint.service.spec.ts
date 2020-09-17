import { TestBed } from '@angular/core/testing';

import { EventsEndpointService } from './events-endpoint.service';

describe('EventsEndpointService', () => {
  let service: EventsEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
