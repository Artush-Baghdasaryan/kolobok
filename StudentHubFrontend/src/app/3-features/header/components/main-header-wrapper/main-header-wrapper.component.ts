import {Component} from '@angular/core';
import {IconType} from '@shared/components/dumb/icon/icon.component';
import {SidenavService} from "../../../../1-core/services/sidenav.service";

@Component({
  selector: 'app-main-header-wrapper',
  templateUrl: './main-header-wrapper.component.html',
  styleUrls: ['./main-header-wrapper.component.scss']
})
export class MainHeaderWrapperComponent {
  IconType = IconType;

  constructor(public sidenavService: SidenavService) {
  }
}
