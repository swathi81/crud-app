import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: any;

  constructor(private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.category = [
      {
        id: "1",
        Name: "#f00"
      },
      {
        id: "2",
        Name: "#0f0"
      },
      {
        id: "3",
        Name: "#00f"
      },
      {
        id: "4",
        Name: "#0ff"
      },
      {
        id: "5",
        Name: "#f0f"
      },
      {
        id: "6",
        Name: "#ff0"
      },
      {
        id: "7",
        Name: "#000"
      }
    ]

  }

  openDialog(item: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '64%';
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.panelClass = 'pnp-modal-panel';
    if (item != 'add') {
      dialogConfig.data = {
        editData: item,
        editValue: "true"
      };
    } else {
      dialogConfig.data = {
      };
    }
    const dialogRef = this.dialog.open(AddCategoryComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult.addCategory) {
        this.category.push({ id: this.category.length + 1, Name: dialogResult.categoryData })
      }
      else {
        let index = this.category.indexOf(dialogResult.id);
        item.Name = dialogResult.categoryData;
        this.category[index] = item;

      }
    })
  }

  delete(item: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.panelClass = 'pnp-modal-panel';
    dialogConfig.data = {
      editData: item,
      editValue: "true"
    };
    const dialogRef = this.dialog.open(DeleteCategoryComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        for (let i = 0; i < this.category.length; ++i) {
          if (this.category[i].id === dialogResult.deleteCategoryiemsId) {
            this.category.splice(i, 1);
          }
        }

      }
    })
  }


}
