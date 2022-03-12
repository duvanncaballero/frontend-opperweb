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

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent } from './comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentModalComponent } from './comment-modal/comment-modal.component';

@NgModule({
  declarations: [
    CommentComponent,
    CommentListComponent,
    CommentFormComponent,
    CommentModalComponent
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
    CommentRoutingModule,
  ]
})
export class CommentModule { }
