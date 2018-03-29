import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hbtranslate'
})
export class HbtranslatePipe implements PipeTransform {

  transform(value: string): string {
    return value; // TODO: implement translation to selected language
  }

}
