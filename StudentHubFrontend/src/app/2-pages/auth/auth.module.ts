import {NgModule} from '@angular/core';
import {FeaturesModule} from "../../3-features/features.module";
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthPageComponent} from './components/auth-page/auth-page.component';

const components = [
  AuthPageComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components
  ],
  imports: [FeaturesModule, AuthRoutingModule]
})
export class AuthModule {
}
