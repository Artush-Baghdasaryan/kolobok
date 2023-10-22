import {Injectable} from '@angular/core';
import {UserService} from "@pages/user-area/services/user.service";
import {IFile, IFileBackend} from "../../../5-models/file";
import {concat, Observable, of, switchMap, tap} from "rxjs";
import {DocumentActionsEnum, DocumentRootService} from "../../../1-core/services/document/document-root.service";
import {DocumentApiService} from "../../../1-core/services/document/document-api.service";

@Injectable()
export class DocumentService {
  constructor(private userService: UserService, private rootService: DocumentRootService, private apiService: DocumentApiService) {
  }

  create(groupId: number, dto: IFile): Observable<IFileBackend> {
    return this.apiService.create(this.userService.user$.value.id, groupId, dto)
      .pipe(tap(() => this.rootService.event$.next(DocumentActionsEnum.Create)));
  }

  delete(groupId: number) {
    return this.apiService.delete(groupId)
      .pipe(tap(() => this.rootService.event$.next(DocumentActionsEnum.Delete)));
  }

  getDocsByGroupId(groupId: number) {
    return concat(of(0), this.rootService.event$).pipe(
      switchMap(() => this.apiService.getByGroupId(groupId))
    )
  }
}
