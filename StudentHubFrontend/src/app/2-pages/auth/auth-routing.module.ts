import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthPageComponent} from "@pages/auth/components/auth-page/auth-page.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: AuthPageComponent
  },
];

@NgModule(
  {
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  }
)
export class AuthRoutingModule {
}
