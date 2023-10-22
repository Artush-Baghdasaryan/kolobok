import {NgModule} from '@angular/core';
import {ShareConspectRoutingModule} from "@pages/share-conspect/share-conspect-routing.module";
import {ViewGroupWrapperComponent} from './components/view-group-wrapper/view-group-wrapper.component';
import {CreateGroupWrapperComponent} from './components/create-group-wrapper/create-group-wrapper.component';
import {FeaturesModule} from "../../3-features/features.module";

const pages = [
  ViewGroupWrapperComponent,
  CreateGroupWrapperComponent
]

@NgModule({
  declarations: [...pages],
  exports: [...pages],
  imports: [
    ShareConspectRoutingModule,
    FeaturesModule
  ]
})
export class ShareConspectModule {
}
