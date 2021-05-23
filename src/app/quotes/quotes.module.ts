import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes.component';

@NgModule({
  imports: [CommonModule],
  declarations: [QuotesComponent],
  exports: [QuotesComponent],
})
export class QuotesModule {}
