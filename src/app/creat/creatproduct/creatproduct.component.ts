import { Component , OnInit } from '@angular/core';
import { inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ServicsesCreat } from '../services/servicses.service';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-creatproduct',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './creatproduct.component.html',
  styleUrl: './creatproduct.component.css'
})
export class CreatproductComponent implements OnInit{
  constructor(private CreatService: ServicsesCreat , private bulid:FormBuilder) { }
  base64: any = ""
  categores:any[]=[]
  form!: FormGroup; 
  ngOnInit(): void {
    this.form=this.bulid.group({
      title: ['',[Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: ['',[Validators.required]],
      category: ['',[Validators.required]]
    })
    this.GetCtegores()
  }
  GetImgPath(event: any) {
    const file = event.target.files[0]
    const reder = new FileReader()
    reder.readAsDataURL(file)
    reder.onload = () => {
      this.base64 = reder.result
      this.form.get('image')?.setValue("base64")
    }
  }

  GetCtegores() {
   
    this.CreatService.GetAllgategoryes().subscribe(res => {
     this.categores=res
    })
  }

  filterproductByCategory(event:any){
    this.form.get('category')?.setValue(event.target.value)
  }
  AddNewProduct(){
const model=this.form.value
this.CreatService.creatproduct(model).subscribe(res=>{
  alert('success your creat product')
})
  }
}