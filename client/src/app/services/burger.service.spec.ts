/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BurgerService } from './burger.service';

describe('Service: Burger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BurgerService]
    });
  });

  it('should ...', inject([BurgerService], (service: BurgerService) => {
    expect(service).toBeTruthy();
  }));
});
