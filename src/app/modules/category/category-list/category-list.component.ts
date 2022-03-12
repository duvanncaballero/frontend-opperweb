import {Component, OnInit } from '@angular/core';
import {MatTableDataSource } from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {
  ConfirmDialogComponent,
  ConfirmDialogModel
} from "../../../shared/components/confirm-dialog/confirm-dialog.component";
import {ToastService } from "../../../shared/services/toast.service";
import {Category } from "../model/category"
import {CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  loading = false;

  //the source where we will get the data
  category :any = []
  categories =  new MatTableDataSource<Category>();

  // columns we will show on the table
  displayedColumns = ['name', 'created_at', 'updated_at', 'option'];

  constructor(
    private service: CategoryService,
    private dialogConfirm: MatDialog,
    private toastService: ToastService,
  ) 
  {}

  ngOnInit(): void {
    this.getAll();
  }

  async getAll(): Promise<void> {
    this.loading = true;
    this.category = await this.service.getAll();
    this.categories.data = this.category.data;
    this.loading = false;
  }

  async eliminar(category: Category): Promise<void> {

    const dialogData = new ConfirmDialogModel(
      'Eliminar categoría',
      `¿Está seguro(a) de eliminar la categoría: <b>${category.name}</b>?`
    );
    const dialogRef = this.dialogConfirm.open(ConfirmDialogComponent, {
      maxWidth: '600px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        const response = await this.service.delete(category.id);
        if (response.status) {
          this.getAll();
          this.toastService.success(response.message);
        }
      }
    });
  }
}
