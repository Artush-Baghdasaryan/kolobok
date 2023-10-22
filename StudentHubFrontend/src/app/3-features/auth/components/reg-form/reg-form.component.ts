import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRegistrationDto} from "../../../../5-models/user";
import {UserApiService} from "../../../../1-core/services/user/user-api.service";
import {RouterService} from "../../../../1-core/services/router.service";

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent {
  public formGroup: FormGroup;

  constructor(private userApiService: UserApiService, private routerService: RouterService) {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  public submit() {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.valid) {
      const dto: UserRegistrationDto = {
        nickname: this.formGroup.get('userName')?.value,
        email: this.formGroup.get('email')?.value,
        password: this.formGroup.get('password')?.value,
        confirmPassword: this.formGroup.get('password')?.value
      }

      this.userApiService.register(dto).subscribe((status: boolean) => {
        if (status) {
          this.routerService.refresh();
        }
      });
    }
  }
}
