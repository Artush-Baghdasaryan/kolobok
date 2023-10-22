import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() type!: IconType;
  @Input() size: IconSize = IconSize.small;

  @HostBinding('style.width') get getSide1(): string {
    switch (this.size) {
      case IconSize.small:
        return '24px';
      case IconSize.usual:
        return '48px'
      case IconSize.large:
        return '72px'
    }
  }

  @HostBinding('style.height') get getSide2(): string {
    switch (this.size) {
      case IconSize.small:
        return '24px';
      case IconSize.usual:
        return '48px'
      case IconSize.large:
        return '72px'
    }
  }

  IconType = IconType;
  IconSize = IconSize;
}

export enum IconType {
  Menu,
  Close,
  User,
  Delete
}

export enum IconSize {
  small,
  usual,
  large
}
