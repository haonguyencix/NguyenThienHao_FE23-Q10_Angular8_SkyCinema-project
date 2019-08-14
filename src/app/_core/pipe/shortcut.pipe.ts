import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform {

  transform(value, limit): any {
    return value.substr(0, limit) + "...";
  }

}
