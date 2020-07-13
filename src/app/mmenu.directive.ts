import { Directive, ElementRef, OnInit } from '@angular/core';
import * as MmenuLight from 'mmenu-light';

@Directive({
  selector: '[appMmenu]'
})
export class MmenuDirective implements OnInit {

  constructor(private el: ElementRef){
    console.log('ctor');
    console.log(MmenuLight)
   }

  ngOnInit(){
    console.log('init');
    // MmenuLight(
    //   this.el.nativeElement, "(max-width: 600px)"
    // );

    const menu = new MmenuLight(
				this.el.nativeElement,
				'all'
			);

    const navigator = menu.navigation({
      // selectedClass: 'Selected',
      // slidingSubmenus: true,
      // theme: 'dark',
      // title: 'Menu'
    });

    const drawer = menu.offcanvas({
      // position: 'left'
    });

    //	Open the menu.
    document.querySelector( 'a[href="#menu"]' )
      .addEventListener( 'click', evnt => {
        evnt.preventDefault();
        drawer.open();
      });
  }

}