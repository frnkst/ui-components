import { NgModule } from '@angular/core';
import { VtUiElementsComponent } from './vt-ui-elements.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    VtUiElementsComponent,
    ButtonComponent
  ],
  imports: [
  ],
  exports: [
    VtUiElementsComponent
  ]
})
export class VtUiElementsModule { }
