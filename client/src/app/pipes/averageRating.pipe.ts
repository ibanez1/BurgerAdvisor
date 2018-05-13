import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageRating',
  pure: false
})
export class AverageRatingPipe implements PipeTransform {

  transform(items: any): any {
    let sum = items.reduce((a, b) => a + b, 0);
    return sum / items.length;
}

}
