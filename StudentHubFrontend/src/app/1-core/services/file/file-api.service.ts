import {HttpClient} from "@angular/common/http";
import {AppConfig} from "../../app.config";
import {IAnalyzeDto} from "src/app/5-models/analyze";
import {IFileBackend} from "src/app/5-models/file";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FileApiService {
  private host: string = this.config.apiRoot;
  private prefix: string = 'Document';

  constructor(private httpClient: HttpClient, private config: AppConfig) {
  }

  public analyzeImage(analyzeDto: IAnalyzeDto): Observable<IFileBackend> {
    return this.httpClient.post<IFileBackend>(`${this.host}/${this.prefix}/analyze`, analyzeDto);
  }

}
