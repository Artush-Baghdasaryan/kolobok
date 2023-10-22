import {Component, Input} from '@angular/core';
import {IconSize, IconType} from '../../icon/icon.component';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent {
  @Input() avatarPath: string | undefined;
  @Input() size: IconSize = IconSize.small;

  IconType = IconType;
  public defaultAvatar: string = "../../../../../assets/defaultAvatar.jpg";
}
