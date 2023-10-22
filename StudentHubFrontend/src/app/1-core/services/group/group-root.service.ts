import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupRootService {
  public event$: Subject<GroupActionsEnum> = new Subject<GroupActionsEnum>()
}

export enum GroupActionsEnum {
  created
}
