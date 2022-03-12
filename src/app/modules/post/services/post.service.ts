import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post';

environment
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private api: ApiService
  )
  {}

  async getAll(): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/post/list`);
  }

  async getByID(id: number): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/post/show/${id}`);
  }

  async create(post: Post): Promise<any> {
    return await this.api.post(`${environment.apiBackend}/post/create`, post);
  }

  async update(post: Post): Promise<any> {
    return await this.api.put(`${environment.apiBackend}/post/update`, post);
  }

  async delete(id: number): Promise<any> {
    return await this.api.delete(`${environment.apiBackend}/post/delete/${id}`);
  }
}