import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GroupBackendDto, GroupDto} from "../../../5-models/group";
import {AppConfig} from "../../app.config";
import {Observable} from "rxjs";
import {AuthTokenService} from "../auth-token.service";
import {UserBackendDto} from 'src/app/5-models/user';
import {IFileBackend} from "../../../5-models/file";

@Injectable({
  providedIn: 'root'
})
export class GroupApiService {
  private host: string = this.config.apiRoot;
  private prefix: string = 'Group';

  constructor(private httpClient: HttpClient, private config: AppConfig, private authTokenService: AuthTokenService) {
  }

  public getDocuments(id: string): Observable<IFileBackend[]> {
    return this.httpClient.get<IFileBackend[]>(`${this.host}/${this.prefix}/${id}/get-documents`)
  }

  public getById(id: string) {
    return this.httpClient.get<GroupBackendDto>(`${this.host}/${this.prefix}/${id}`);
  }

  public searchGroups(search: string): Observable<GroupBackendDto[]> {
    return this.httpClient.get<GroupBackendDto[]>(`${this.host}/${this.prefix}/search-groups?search=${search}`);
  }

  public getGroupMembers(groupId: number): Observable<UserBackendDto[]> {
    return this.httpClient.get<UserBackendDto[]>(`${this.host}/${this.prefix}/${groupId}/get-members`);
  }

  public getGroupOwner(groupId: number): Observable<UserBackendDto> {
    return this.httpClient.get<UserBackendDto>(`${this.host}/${this.prefix}/${groupId}/get-owner`);
  }

  public getUserGroups(): Observable<GroupBackendDto[]> {
    return this.httpClient.get<GroupBackendDto[]>(`${this.host}/${this.prefix}/${this.authTokenService.getId()}/get-user-groups`);
  }

  public create(dto: GroupDto): Observable<GroupBackendDto> {
    return this.httpClient.post<GroupBackendDto>(`${this.host}/${this.prefix}/add-group?userId=${this.authTokenService.getId()}`, dto);
  }
}
