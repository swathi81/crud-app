import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import { AlertService } from '../../_alert/alert.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddProductComponent>
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [null, [Validators.required]],
      category: [null,  [Validators.required]],
      price: [null,  [Validators.required]]
    });
  }
  get name() { return this.productForm.get('name') as FormControl; }
  get category() { return this.productForm.get('category') as FormControl; }
  get price() { return this.productForm.get('price') as FormControl; }

  close() {
    this.dialogRef.close();
  }
  addProduct(){
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return;
    }else{
    this.dialogRef.close({status:true, productCategory: this.category.value, ProductName: this.name.value, productPrice: this.price.value});
    }
  }
  
}
