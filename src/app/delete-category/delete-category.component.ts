import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {

  }
  onConfirmCancel(){
    this.dialogRef.close(false);
  }
  onConfirmDelete(){
    this.dialogRef.close({status:true, deleteCategoryiemsId: this.data.editData.id, deleteCategoryitems: this.data.editData});
  }
}
