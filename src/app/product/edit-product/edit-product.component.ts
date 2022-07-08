import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  productForm!: FormGroup;
  editFormData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditProductComponent>
  ) {
    console.log(this.data);
   }

  ngOnInit(): void {
    this.editFormData = this.data.editProductData;
    console.log(this.editFormData)
    this.productForm = this.formBuilder.group({
      name: [this.editFormData.Name, [Validators.required]],
      category: [this.editFormData.Category, [Validators.required]],
      price: [this.editFormData.Price, [Validators.required]]
    });
  }
  get name() { return this.productForm.get('name') as FormControl; }
  get category() { return this.productForm.get('category') as FormControl; }
  get price() { return this.productForm.get('price') as FormControl; }

  editProduct(){
    this.dialogRef.close({status: true, 
      productName: this.name.value, 
      id: this.data.editProductData.id, 
      productCategory:this.category.value, 
      productPrice: this.price.value})
  }
  close(){
    this.dialogRef.close();
  }
}
