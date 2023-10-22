import {Injectable} from '@angular/core';
import {UserApiService} from "../../../1-core/services/user/user-api.service";
import {UserRootService} from "../../../1-core/services/user/user-root.service";
import {BehaviorSubject, concat, Observable, of, switchMap} from "rxjs";
import {UserEntityDto} from "../../../5-models/user";
import {AuthTokenService} from "../../../1-core/services/auth-token.service";

@Injectable()
export class UserService {
  public user$: BehaviorSubject<UserEntityDto> = new BehaviorSubject<UserEntityDto>(this.getUserEntityDtoStub());

  constructor(private readonly userApiService: UserApiService, private readonly userRootService: UserRootService, private authTokenService: AuthTokenService) {
    this.getCurrent().subscribe((user) => this.user$.next(user));
  }

  public getCurrent() {
    const thisId: number = this.authTokenService.getId() ?? 0;

    return this.getById(thisId.toString());
  }

  public getById(id: string): Observable<UserEntityDto> {
    return concat(of(0), this.userRootService.event$).pipe(
      switchMap(() => this.userApiService.getById(id))
    )
  }

  private getUserEntityDtoStub(): UserEntityDto {
    return {
      nickname: '',
      avatar: '',
      id: 0,
      email: '',
      confirmPassword: ''
    }
  }
}
