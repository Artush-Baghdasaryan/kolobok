import {Injectable} from '@angular/core';
import {ScreenService} from "./screen.service";
import {MatDrawerMode} from "@angular/material/sidenav";
import {BehaviorSubject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  public mode: MatDrawerMode = 'push';
  public opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public width$: BehaviorSubject<number> = new BehaviorSubject<number>(20);
  public subscription = new Subscription();

  constructor(private screenService: ScreenService) {
    this.screenService.isDesktop$.subscribe((isDesktop) => {
      if (isDesktop) {
        this.setDesktop();
      } else {
        this.setMobile();
      }
    });
  }

  public setDesktop(): void {
    this.mode = 'push';
    this.opened$.next(true);
    this.width$.next(20);
  }

  public setMobile(): void {
    this.mode = 'side';
    this.opened$.next(false);
    this.width$.next(100);
  }

  public toggleSidenav(): void {
    this.opened$.next(!this.opened$.value);
  }
}
