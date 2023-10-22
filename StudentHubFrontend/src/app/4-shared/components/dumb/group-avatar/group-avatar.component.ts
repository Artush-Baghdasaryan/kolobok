import {Component, Input} from '@angular/core';
import {IconSize, IconType} from "@shared/components/dumb/icon/icon.component";

@Component({
  selector: 'app-group-avatar',
  templateUrl: './group-avatar.component.html',
  styleUrls: ['./group-avatar.component.scss']
})
export class GroupAvatarComponent {
  @Input() avatarPath: string | undefined | null;
  @Input() size: IconSize = IconSize.small;
  IconType = IconType;
  public defaultAvatar: string = "../../../../../assets/groupChatImage.jpg";
}
