import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserEntityDto, UserLoginDto, UserRegistrationDto} from "../../../5-models/user";
import {AppConfig} from "../../app.config";
import {Observable} from "rxjs";
import {GroupDto} from 'src/app/5-models/group';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private host: string = this.config.apiRoot;
  private prefix: string = 'User';

  constructor(private httpClient: HttpClient, private config: AppConfig) {
  }

  public register(dto: UserRegistrationDto): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.host}/${this.prefix}/registrate`, dto);
  }

  public login(dto: UserLoginDto): Observable<{ token: string, id: number }> {
    return this.httpClient.post<{ token: string, id: number }>(`${this.host}/${this.prefix}/login`, dto);
  }

  public getById(id: string): Observable<UserEntityDto> {
    return this.httpClient.get<UserEntityDto>(`${this.host}/${this.prefix}/${id}`);
  }

  public addGroup(dto: GroupDto): Observable<GroupDto> {
    return this.httpClient.post<GroupDto>(`https://localhost:7126/api/Group/add-group?userId=2`, dto);
  }
}
