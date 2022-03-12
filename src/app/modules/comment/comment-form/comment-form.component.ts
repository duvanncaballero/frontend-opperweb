import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import { ToastService} from "../../../shared/services/toast.service";
import { PostService } from '../../post/services/post.service';
import { Comment } from '../model/comment';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  id: number;
  loading: boolean = false;
  form: FormGroup;
  posts: any =[];

  constructor(
    private formBuilder: FormBuilder,
    private apiPost: PostService,
    private toastService: ToastService,
    private api: CommentService,
    private activeRoute: ActivatedRoute,
    private route: Router,
  ) 
  {
    this.activeRoute.params.subscribe(params => {
      if (params.id !== undefined && params.id !== null) {
        this.id = params.id;
        this.load();
      }
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      post: [null, [Validators.required]],
      content: [null, [Validators.required]],
    });

    this.getPosts();
  }

  async load(): Promise<void> {
    const data = await this.api.getByID(this.id);
    this.form.patchValue({
      'post': data.data.post?.id,
      'content': data.data.content,
    })
  }

  async getPosts(): Promise<void> {
    this.loading = true;
    this.posts = await this.apiPost.getAll();
    this.loading = false;
  }

  getParams(): Comment {
    return {
      ...this.form.value,
      id: this.id,
    };
  }

  async submit(): Promise<void> {
    if (!this.form.valid) {
      this.toastService.warning('Hay errores en el formulario');
      return;
    }

    const post = this.getParams();
    let response;
    this.loading = true;
    if (!this.id) {
      response = await this.api.create(post);
    } else {
      response = await this.api.update(post);
    }

    if(response.status) {
      this.toastService.success(response.message);
      this.route.navigate(['/comment']);
    }
  }
}
