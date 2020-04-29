/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarSeriesService } from './listarSeries.service';

describe('Service: ListarSeries', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarSeriesService]
    });
  });

  it('should ...', inject([ListarSeriesService], (service: ListarSeriesService) => {
    expect(service).toBeTruthy();
  }));
});
