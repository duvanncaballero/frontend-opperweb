import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {

  
  constructor(private http: HttpClient) {
  }

  async get(path: string): Promise<any> {
    return await this.http.get<any>(path)
      .toPromise()
      .then(resp => {
        return resp;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async post(path: string, params: object): Promise<any> {
    return await this.http.post(path, params)
      .toPromise()
      .then(resp => {
        return resp;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async put(path: string, params: object): Promise<any> {
    return await this.http.put(path, params)
      .toPromise()
      .then(resp => {
        return resp;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async delete(path: string): Promise<any> {
    return await this.http.delete(path)
      .toPromise()
      .then(resp => {
        return resp;
      })
      .catch((error: any) => {
        return error;
      });
  }

}
