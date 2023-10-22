import {Injectable} from "@angular/core";

@Injectable(
  {'providedIn': 'root'}
)
export class AppConfig {
  public get getRootFolder() {
    return "D:/Repos/hack/student-hub/StudentHubFrontend";
  }

  public get apiRoot(): string {
    return '/api';
  }

  public getProjectName(): string {
    return "StudentHub";
  }
}
