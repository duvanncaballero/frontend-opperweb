import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute, Router} from "@angular/router";
import { ToastService} from "../../../shared/services/toast.service";
import { CategoryService } from '../../category/services/category.service';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  id: number;
  loading: boolean = false;
  form: FormGroup;
  categories: any =[];

  constructor(
    private formBuilder: FormBuilder,
    private apiCategory: CategoryService,
    private toastService: ToastService,
    private api: PostService,
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
      category: [null, [Validators.required]],
      title: [null, [Validators.required]],
      content: [null, [Validators.required]],
    });

    this.getCategories();
  }

  async load(): Promise<void> {
    const data = await this.api.getByID(this.id);
    this.form.patchValue({
      'category': data.data.category.id,
      'title': data.data.title,
      'content': data.data.content,
    })
  }

  async getCategories(): Promise<void> {
    this.loading = true;
    this.categories = await this.apiCategory.getAll();
    this.loading = false;
  }

  getParams(): Post {
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
      this.route.navigate(['/post']);
    }
  }
}
