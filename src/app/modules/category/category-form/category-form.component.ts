import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { ToastService} from "../../../shared/services/toast.service";
import { ActivatedRoute, Router} from "@angular/router";
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  id: number;
  loading: boolean = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private api: CategoryService,
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
      name: [null, [Validators.required]],
    });
  }

  async load(): Promise<void> {
    const data = await this.api.getByID(this.id);
    this.form.patchValue({
      'name': data.data.name,
    });
  }

  getParams(): Category {
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

    const category = this.getParams();
    console.log(category);
    let response;
    this.loading = true;
    if (!this.id) {
      response = await this.api.create(category);
    } else {
      response = await this.api.update(category);
    }

    if(response.status) {
      this.toastService.success(response.message);
      this.route.navigate(['/category']);
    }
  }

}


