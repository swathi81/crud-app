import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  editValue: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCategoryComponent>
  ) { 
  }

  ngOnInit(): void {
    let categoryName;
    if(this.data.editData){
      this.editValue = true;
      categoryName = this.data.editData.Name ;
    }else{
      this.editValue = false;
      categoryName = ''
    }
    this.categoryForm = this.fb.group({
      name: [categoryName, [Validators.required]]
    });
  }
  get name() { return this.categoryForm.get('name') as FormControl; }
  close() {
    this.dialogRef.close();
  }
  addCategory(){
    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }else{
    if(!this.editValue){
    this.dialogRef.close({status:true, addCategory: true, categoryData: this.name.value});
    }else{
      this.dialogRef.close({status: true, categoryData: this.name.value, id: this.data.editData.id})
    }
  }
  }
}
