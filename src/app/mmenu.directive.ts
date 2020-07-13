import { Directive } from '@angular/core';

@Directive({
  selector: '[appMmenu]'
})
export class MmenuDirective {

  constructor() {
    console.log('init');
   }

}