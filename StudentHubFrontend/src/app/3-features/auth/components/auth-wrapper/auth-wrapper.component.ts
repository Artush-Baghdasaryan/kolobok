import {Component} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {ScreenService} from "../../../../1-core/services/screen.service";
import {AppConfig} from "../../../../1-core/app.config";

@Component({
  selector: 'app-auth-wrapper',
  templateUrl: './auth-wrapper.component.html',
  styleUrls: ['./auth-wrapper.component.scss']
})
export class AuthWrapperComponent {
  constructor(public screenService: ScreenService, private config: AppConfig) {
  }

  public getTitle = () => this.config.getProjectName();

  public background: ThemePalette = "primary";

  public getWidth(isDesktop: boolean | null): string {
    return isDesktop ? '50%' : '100%';
  }
}
