import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule} from '@angular/material/card';
import { SharedModule } from "../../shared/shared.module";
import { ComponentsModule } from "../../shared/components/components.module";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import { PostComponent } from './post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFormComponent } from './post-form/post-form.component'  
import { PostRoutingModule } from './post-routing.module';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostFormComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    ComponentsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    PostRoutingModule,
    
  ]
})
export class PostModule { }
