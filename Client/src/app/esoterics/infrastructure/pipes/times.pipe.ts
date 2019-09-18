import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'times'
})
export class TimesPipe implements PipeTransform {

  transform(quantity: number): any {
    const iterable = <Iterable<any>> {};
    iterable[Symbol.iterator] = function* () {
      let n = 0;
      while (n < quantity) {
        yield ++n;
      }
    };
    return iterable;
  }

}