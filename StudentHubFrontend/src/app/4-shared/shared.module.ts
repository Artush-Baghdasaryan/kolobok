import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAvatarComponent} from './components/dumb/user/user-avatar/user-avatar.component';
import {HeaderComponent} from './components/dumb/header/header.component';
import {HeaderElementDirective} from './directives/header-element.directive';
import {IconComponent} from './components/dumb/icon/icon.component';
import {FileUploadComponent} from './components/dumb/file-upload/file-upload.component';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {FileComponent} from './components/dumb/file/file.component';
import {UserAvatarRowComponent} from './components/dumb/user/user-avatar-row/user-avatar-row.component';
import {MatCardModule} from "@angular/material/card";
import {GroupAvatarComponent} from './components/dumb/group-avatar/group-avatar.component';
import { UserListComponent } from './components/dumb/user/user-list/user-list.component';
import { CommentsComponent } from './components/dumb/comments/comments.component';

@NgModule({
  declarations: [
    UserAvatarComponent,
    HeaderComponent,
    HeaderElementDirective,
    IconComponent,
    FileUploadComponent,
    FileComponent,
    UserAvatarRowComponent,
    GroupAvatarComponent,
    UserListComponent,
    GroupAvatarComponent,
    CommentsComponent
  ],
  exports: [
    HeaderComponent,
    HeaderElementDirective,
    IconComponent,
    UserAvatarComponent,
    FileUploadComponent,
    FileComponent,
    UserAvatarRowComponent,
    GroupAvatarComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatCardModule
  ]
})
export class SharedModule {
}
