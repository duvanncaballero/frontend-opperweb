import {Injectable} from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) {
  }

  success(message: string) {
    this.toastr.success(message, '', {positionClass: 'toast-bottom-center'});
  }

  warning(message: string) {
    this.toastr.warning(message, '', {positionClass: 'toast-bottom-center'});
  }

  error(message: string) {
    this.toastr.error(message, '', {positionClass: 'toast-bottom-center'});
  }

}
