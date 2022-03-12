import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterModule} from "@angular/router";
import { SinRegistrosComponent } from './sin-registros/sin-registros.component';
import {MatIconModule} from "@angular/material/icon";
import { LoadingComponent } from './loading/loading.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SinRegistrosComponent,
    LoadingComponent,
    ConfirmDialogComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SinRegistrosComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class ComponentsModule {
}
