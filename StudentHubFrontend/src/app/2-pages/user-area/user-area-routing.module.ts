import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainRoutes} from "../../1-core/services/router.service";
import {MainPageComponent} from "@pages/user-area/components/main-page/main-page.component";
import {
  ViewGroupWrapperComponent
} from "@pages/share-conspect/components/view-group-wrapper/view-group-wrapper.component";
import {
  CreateGroupWrapperComponent
} from "@pages/share-conspect/components/create-group-wrapper/create-group-wrapper.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: MainRoutes.CreateGroup,
        component: CreateGroupWrapperComponent
      },
      {
        path: MainRoutes.ViewGroup,
        component: ViewGroupWrapperComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: MainRoutes.CreateGroup
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAreaRoutingModule {
}
