import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentRootService {
  public event$: Subject<DocumentActionsEnum> = new Subject<DocumentActionsEnum>();
}

export enum DocumentActionsEnum {
  Create,
  Delete
}
