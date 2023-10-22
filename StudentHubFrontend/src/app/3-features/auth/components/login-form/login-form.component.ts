import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserApiService} from "../../../../1-core/services/user/user-api.service";
import {UserLoginDto} from "../../../../5-models/user";
import {AuthTokenService} from "../../../../1-core/services/auth-token.service";
import {RouterService} from "../../../../1-core/services/router.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public formGroup: FormGroup;

  constructor(private userApiService: UserApiService,
              private tokenService: AuthTokenService,
              private routerService: RouterService,
  ) {
    this.formGroup = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  public submit(): void {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.valid) {
      const dto: UserLoginDto = {
        nickname: this.formGroup.get('userName')?.value,
        password: this.formGroup.get('password')?.value,
      }

      this.userApiService.login(dto).subscribe((value: { token: string, id: number }) => {
        this.tokenService.saveToken(value.token);
        this.tokenService.saveId(value.id);

        this.routerService.toMain().then();
      });
    }
  }
}
