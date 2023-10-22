import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {authComponents} from "./auth";
import {MatTabsModule} from "@angular/material/tabs";
import {RouterOutlet} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {sidenavComponents} from "./sidenav";
import {MatSidenavModule} from "@angular/material/sidenav";
import {headerComponents} from "./header";
import {SharedModule} from "@shared/shared.module";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {groupComponents} from "./group";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";

const components = [
  ...authComponents,
  ...sidenavComponents,
  ...headerComponents,
  ...groupComponents
];

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterOutlet,
    MatCardModule,
    MatSidenavModule,
    SharedModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
  ]
})
export class FeaturesModule {
}
