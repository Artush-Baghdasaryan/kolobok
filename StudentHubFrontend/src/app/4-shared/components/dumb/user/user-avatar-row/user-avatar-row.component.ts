import {Component, Input} from '@angular/core';
import {UserEntityDto} from "../../../../../5-models/user";
import {IconSize} from "@shared/components/dumb/icon/icon.component";

@Component({
  selector: 'app-user-avatar-row',
  templateUrl: './user-avatar-row.component.html',
  styleUrls: ['./user-avatar-row.component.scss']
})
export class UserAvatarRowComponent {
  @Input() user: UserEntityDto | null = null;
  IconSize = IconSize;
}
