import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpacexService } from './spacex.service';

describe('SpacexService', () => {
  let service: SpacexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HttpClientModule,HttpClient]
    });
    service = TestBed.inject(SpacexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
    service.getFilterLaunches({}).subscribe(value => {
      expect(value).toBe('observable value');
      done();
    });
  });

});
