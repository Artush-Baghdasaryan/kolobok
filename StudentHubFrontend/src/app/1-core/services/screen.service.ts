import {Injectable, NgZone} from '@angular/core';
import {BreakpointObserver, Breakpoints, MediaMatcher} from "@angular/cdk/layout";
import {BehaviorSubject, distinctUntilChanged} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  public isDesktop$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private _mediaMatcher: MediaMatcher, private _zone: NgZone) {
    const breakpointObserver = new BreakpointObserver(this._mediaMatcher, this._zone);

    breakpointObserver.observe([
      Breakpoints.Web
    ]).pipe(distinctUntilChanged(
      (previous, current) => previous.matches === current.matches))
      .subscribe((result) => {
        this.isDesktop$.next(result.matches);
      });
  }
}
