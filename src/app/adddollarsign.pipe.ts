import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adddollarsign'
})
export class AdddollarsignPipe implements PipeTransform {

  transform(value: number): string {
    return "$" + value;
  }

}
