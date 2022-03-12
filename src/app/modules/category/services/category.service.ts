import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';

environment
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private api: ApiService
  )
  {}

  async getAll(): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/category/list`);
  }

  async getByID(id: number): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/category/show/${id}`);
  }  

  async create(category: Category): Promise<any> {
    return await this.api.post(`${environment.apiBackend}/category/create`, category);
  }

  async update(category: Category): Promise<any> {
    return await this.api.put(`${environment.apiBackend}/category/update`, category);
  }

  async delete(id: number): Promise<any> {
    return await this.api.delete(`${environment.apiBackend}/category/delete/${id}`);
  }
}