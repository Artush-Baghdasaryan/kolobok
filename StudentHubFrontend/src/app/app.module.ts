import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CoreRoutingModule} from './1-core/core-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from "./1-core/core.module";
import {SharedModule} from "./4-shared/shared.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./1-core/interceptors/jwt-interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    BrowserModule,
    CoreRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
