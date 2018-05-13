import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBurgers'
})
export class SortBurgersPipe implements PipeTransform {

  transform(burgers:any[], path: string[], order: number): any {

    if (!burgers || !path || !order) return burgers;
    return burgers.sort((a, b) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })
      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    })
  }

}
