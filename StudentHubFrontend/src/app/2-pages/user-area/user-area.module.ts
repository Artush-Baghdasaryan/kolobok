import {NgModule} from '@angular/core';
import {UserAreaRoutingModule} from "@pages/user-area/user-area-routing.module";
import {MainPageComponent} from './components/main-page/main-page.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {FeaturesModule} from "../../3-features/features.module";
import {AsyncPipe, NgIf, NgStyle, NgTemplateOutlet} from "@angular/common";
import {SharedModule} from "@shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {UserService} from "@pages/user-area/services/user.service";
import {ShareConspectModule} from "@pages/share-conspect/share-conspect.module";
import {GroupService} from "@pages/user-area/services/group.service";
import {DocumentService} from "@pages/user-area/services/document.service";

const modules: any[] = [
  UserAreaRoutingModule,
  ShareConspectModule,
  MatSidenavModule,
  FeaturesModule,
  AsyncPipe,
  SharedModule,
  MatIconModule,
  NgStyle,
  NgTemplateOutlet,
];
const pages = [
  MainPageComponent
];
const services: any[] = [
  UserService,
  GroupService,
  DocumentService
]

@NgModule({
  declarations: [
    ...pages
  ],
  exports: [
    ...pages
  ],
  imports: [
    ...modules,
    NgIf,
  ],
  providers: [
    ...services
  ]
})
export class UserAreaModule {
}
