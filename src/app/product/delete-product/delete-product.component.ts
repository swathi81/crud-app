import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onConfirmCancel(){
    this.dialogRef.close(false);
  }
  onConfirmDelete(){
    this.dialogRef.close({status:true, deleteProductitemsId: this.data.editProductData.id, deleteProductitems: this.data.editProductData.Name});
  }

}
