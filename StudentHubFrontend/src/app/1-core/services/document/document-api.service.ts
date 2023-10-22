import {Injectable} from '@angular/core';
import {AppConfig} from "../../app.config";
import {HttpClient} from "@angular/common/http";
import {IFile, IFileBackend} from "../../../5-models/file";
import {Observable} from "rxjs";
import {IAnalyzeDto} from "../../../5-models/analyze";

@Injectable({
  providedIn: 'root'
})
export class DocumentApiService {
  private host: string = this.config.apiRoot;
  private prefix: string = 'Document';

  constructor(private config: AppConfig, private httpClient: HttpClient) {
  }

  public create(userId: number, groupId: number, dto: IFile): Observable<IFileBackend> {
    return this.httpClient.post<IFileBackend>(`${this.host}/${this.prefix}/add-document?userId=${userId}&groupId=${groupId}`, dto);
  }

  public delete(groupId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.host}/${this.prefix}/${groupId}`);
  }

  public getByGroupId(groupId: number): Observable<IFileBackend[]> {
    return this.httpClient.get<IFileBackend[]>(`${this.host}/${this.prefix}/${groupId}/get-group-docs`);
  }

  public analyze(dto: IAnalyzeDto): Observable<void> {
    return this.httpClient.post<void>(`${this.host}/${this.prefix}/analyze`, dto);
  }
}
