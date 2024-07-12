import { Routes } from '@angular/router';
import { AllproductsComponent } from './products/components/allproducts/allproducts.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductDetailsComponent } from './products/component/product-details/product-details.component';
import { CreatproductComponent } from './creat/creatproduct/creatproduct.component';

export const routes: Routes = [
    {path:"product",component:AllproductsComponent},
    {path:"cart",component:CartComponent},
    {path:"details/:id",component:ProductDetailsComponent},
    {path:"creat",component:CreatproductComponent}
];
