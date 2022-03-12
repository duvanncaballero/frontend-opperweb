import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {
  ConfirmDialogComponent,
  ConfirmDialogModel
} from "../../../shared/components/confirm-dialog/confirm-dialog.component";
import {ToastService} from "../../../shared/services/toast.service";
import {Post} from "../model/post"
import { PostService } from '../services/post.service';
import { CommentModalComponent } from '../../comment/comment-modal/comment-modal.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  loading = false;
  post :any = []
  posts =  new MatTableDataSource<Post>();

  // columns we will show on the table
  displayedColumns = ['title', 'content', 'created_at', 'updated_at', 'option'];

  constructor(
    private service: PostService,
    private dialogConfirm: MatDialog,
    private toastService: ToastService,
    private dialog: MatDialog,
  ) 
  {}

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<void> {
    this.loading = true;
    this.post = await this.service.getAll();
    this.posts.data = this.post.data;

    this.loading = false;
  }

  async eliminar(post: Post): Promise<void> {

    const dialogData = new ConfirmDialogModel(
      'Eliminar publicación',
      `¿Está seguro(a) de eliminar la publicación: <b>${post.title}</b>?`
    );
    const dialogRef = this.dialogConfirm.open(ConfirmDialogComponent, {
      maxWidth: '600px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        const response = await this.service.delete(post.id);
        if (response.status) {
          this.getAll();
          this.toastService.success(response.message);
        }
      }
    });
  }

  async modal(post: Post): Promise<void> {
    let dialogRef = this.dialog.open(CommentModalComponent, {
      height: '400px',
      width: '1000px',
    });
  }
}
