import {GroupApiService} from "../../../1-core/services/group/group-api.service";
import {GroupRootService} from "../../../1-core/services/group/group-root.service";
import {concat, Observable, of, switchMap} from "rxjs";
import {GroupBackendDto} from "../../../5-models/group";
import {Injectable} from "@angular/core";
import {IFileBackend} from "../../../5-models/file";
import {DocumentRootService} from "../../../1-core/services/document/document-root.service";

@Injectable()
export class GroupService {
  constructor(private readonly docRootService: DocumentRootService, private readonly groupApiService: GroupApiService, private readonly groupRootService: GroupRootService) {
  }

  public getMyUserGroups(): Observable<GroupBackendDto[]> {
    return concat(of(0), this.groupRootService.event$).pipe(
      switchMap(() => this.groupApiService.getUserGroups())
    )
  }

  public getById(id: string): Observable<GroupBackendDto> {
    return concat(of(0), this.groupRootService.event$).pipe(
      switchMap(() => this.groupApiService.getById(id))
    )
  }

  public getDocuments(id: string): Observable<IFileBackend[]> {
    return concat(of(0), this.docRootService.event$).pipe(
      switchMap(() => this.groupApiService.getDocuments(id))
    )
  }
}
