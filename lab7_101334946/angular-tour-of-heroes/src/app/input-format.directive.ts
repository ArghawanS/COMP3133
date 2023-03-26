import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }


  @HostListener('blur', ['$event'])  onMouseOut(event: { target: { value: string; }; }) {
    this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid lightblue')
    event.target.value = event.target.value.toUpperCase();

  }

}
