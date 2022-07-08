import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productLits : any;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productLits = [
      {
        id: "1" , 
        Name: "#f00",
        Category: "Bakery",
         Price: "$ 2"
      },
      {
        id:"2",
        Name: "#f00",
        Category: "Bakery",
        Price: "$ 2"
      },
      {
        id: "3" , 
        Name: "#f00",
          Category: "Bakery",
          Price: "$ 2"
      },
      {
        id: "4" , 
        Name: "#f00",
        Category: "Bakery",
        Price: "$ 2"
      },
      {
        id: "5" , 
        Name: "#f00",
          Category: "Bakery",
          Price: "$ 2"
      },
      {
        id: "6" , 
        Name: "#f00",
        Category: "Bakery",
        Price: "$ 2"
      },
      {
        id: "7" , 
        Name: "#f00",
          Category: "Bakery",
          Price: "$ 2"
      }
    ]

  }

  addProduct(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '64%';
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.panelClass = 'pnp-modal-panel';
    const dialogRef = this.dialog.open(AddProductComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.productLits.push({ id: this.productLits.length + 1, 
          Name: dialogResult.ProductName,
          Category: dialogResult. productCategory,
          Price: dialogResult. productPrice })
      }
    })
    
  }

  editProduct(item: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '64%';
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.panelClass = 'pnp-modal-panel';
    dialogConfig.data = {
      editProductData: item,
      
    };
    const dialogRef = this.dialog.open(EditProductComponent, dialogConfig);
   
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        let index = this.productLits.indexOf(dialogResult.id);
        item.Name = dialogResult.productName;
        item.Category = dialogResult.productCategory;
        item.Price = dialogResult.productPrice;
        this.productLits[index] = item;
      }
    })
  }
  deleteProduct(item: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '64%';
    dialogConfig.backdropClass = 'backdropBackground';
    dialogConfig.panelClass = 'pnp-modal-panel';
    dialogConfig.data = {
      editProductData: item,
      
    };
    const dialogRef = this.dialog.open(DeleteProductComponent, dialogConfig);
   
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        for (let i = 0; i < this.productLits.length; ++i) {
          if (this.productLits[i].id === dialogResult.deleteProductitemsId) {
            this.productLits.splice(i, 1);
          }
        }
        
      }
    })
  }
}
