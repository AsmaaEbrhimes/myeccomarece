import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../servises/products.service';
import { SpennerComponent } from '../../../shared/components/spenner/spenner.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [SpennerComponent, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  data: any = {}
  loding: boolean = false
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getproductbyid()
  }

  getproductbyid() {
    this.loding = true
    this.productService.GetProductById(this.id).subscribe(res => {
      this.loding = false
      this.data = res
    })
  }
}

