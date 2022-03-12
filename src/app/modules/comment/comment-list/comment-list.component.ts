import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {
  ConfirmDialogComponent,
  ConfirmDialogModel
} from "../../../shared/components/confirm-dialog/confirm-dialog.component";
import {ToastService} from "../../../shared/services/toast.service";
import {Comment} from "../model/comment"
import { CommentService } from '../services/comment.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {

  loading = false;
  comment :any = []
  comments =  new MatTableDataSource<Comment>();

  // columns we will show on the table
  displayedColumns = ['content', 'created_at', 'updated_at', 'option'];

  constructor(
    private service: CommentService,
    private dialogConfirm: MatDialog,
    private toastService: ToastService,
  ) 
  {}

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<void> {
    this.loading = true;
    this.comment = await this.service.getAll();
    this.comments.data = this.comment.data;

    this.loading = false;
  }

  async eliminar(comment: Comment): Promise<void> {

    const dialogData = new ConfirmDialogModel(
      'Eliminar comentario',
      `¿Está seguro(a) de eliminar la comentario?`
    );
    const dialogRef = this.dialogConfirm.open(ConfirmDialogComponent, {
      maxWidth: '600px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        const response = await this.service.delete(comment.id);
        if (response.status) {
          this.getAll();
          this.toastService.success(response.message);
        }
      }
    });
  }
}
