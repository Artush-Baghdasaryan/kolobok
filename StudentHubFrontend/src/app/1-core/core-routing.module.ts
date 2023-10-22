import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthRoutes, MainRoutes} from "./services/router.service";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: AuthRoutes.Index,
    loadChildren: () => import('@pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: MainRoutes.Index,
    canActivate: [AuthGuard],
    loadChildren: () => import('@pages/user-area/user-area.module').then((m) => m.UserAreaModule)
  },
  {
    path: '',
    pathMatch: "full",
    redirectTo: AuthRoutes.Index
  },
  // {
  //   path: "**",
  //   redirectTo: AuthRoutes.Index
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
