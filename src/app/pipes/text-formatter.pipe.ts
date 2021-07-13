import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormatter'
})
export class TextFormatterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]) {
    var splittedString = value.split(' ');
    var resultString = '';
    for(var i=0; i<splittedString.length; i++)
    {
      var formatted = splittedString[i].substring(0,1).toUpperCase() + splittedString[i].substring(1).toLowerCase();
      if(i===splittedString.length-1)
       resultString += formatted;
       else
       resultString += formatted + ' ';
    }

    return resultString;
  }

}
