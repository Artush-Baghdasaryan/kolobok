import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appHeaderElement]'
})
export class HeaderElementDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
