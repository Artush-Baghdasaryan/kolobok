import {Component, ContentChildren, Input, QueryList, TemplateRef} from '@angular/core';
import {HeaderElementDirective} from "@shared/directives/header-element.directive";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ContentChildren(HeaderElementDirective) headerTemplates!: QueryList<HeaderElementDirective>;

  public get headerElements(): TemplateRef<unknown>[] {
    return this.headerTemplates.map((item) => item.template);
  }
}
