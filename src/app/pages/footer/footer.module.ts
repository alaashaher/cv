import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { footerComponent } from './footer.component';

@NgModule({
  declarations: [
    footerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [footerComponent]
})
export class FooterModule { }
