import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';
import { Comment } from '../model/comment';

environment
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private api: ApiService
  )
  {}

  async getAll(): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/comment/list`);
  }

  async getByID(id: number): Promise<any> {
    return await this.api.get(`${environment.apiBackend}/comment/show/${id}`);
  }

  async create(comment: Comment): Promise<any> {
    return await this.api.post(`${environment.apiBackend}/comment/create`, comment);
  }

  async update(comment: Comment): Promise<any> {
    return await this.api.put(`${environment.apiBackend}/comment/update`, comment);
  }

  async delete(id: number): Promise<any> {
    return await this.api.delete(`${environment.apiBackend}/comment/delete/${id}`);
  }
}