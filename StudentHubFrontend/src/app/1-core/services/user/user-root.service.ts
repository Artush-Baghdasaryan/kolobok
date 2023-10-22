import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserRootService {
  public event$: Subject<UserActionEnum> = new Subject<UserActionEnum>();
}

export enum UserActionEnum {
  stub,
  auth
}
