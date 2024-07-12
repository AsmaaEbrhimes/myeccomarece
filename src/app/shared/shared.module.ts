import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpennerComponent } from './components/spenner/spenner.component';
// import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports:[
    SpennerComponent,
    // SelectComponent
  ]
})
export class SharedModule { }
