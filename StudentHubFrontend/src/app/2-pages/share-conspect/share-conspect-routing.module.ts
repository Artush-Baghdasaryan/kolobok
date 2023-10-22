import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainRoutes} from "../../1-core/services/router.service";
import {
  CreateGroupWrapperComponent
} from "@pages/share-conspect/components/create-group-wrapper/create-group-wrapper.component";

const routes: Routes = [
  {
    path: MainRoutes.Index,
    component: CreateGroupWrapperComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ShareConspectRoutingModule {
}
