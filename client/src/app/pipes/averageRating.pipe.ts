import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'averageRating',
})
export class AverageRatingPipe implements PipeTransform {

  transform(items: any): any {
    let sum = items.reduce((a, b) => a + b, 0);
    let avg = sum / items.length;
    return avg
}

}
