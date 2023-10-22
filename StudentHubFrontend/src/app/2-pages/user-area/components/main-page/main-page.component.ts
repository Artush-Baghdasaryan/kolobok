import {Component, HostBinding} from '@angular/core';
import {SidenavService} from "../../../../1-core/services/sidenav.service";
import {ScreenService} from "../../../../1-core/services/screen.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  @HostBinding('class.base-background') addBackground = true;

  constructor(
    public sidenavService: SidenavService,
    public screenService: ScreenService,
  ) {
  }

  public getStyle(isDesktop: boolean | null) {
    return {
      width: isDesktop ? '20%' : '100%',
      height: '100vh'
    }
  }
}
