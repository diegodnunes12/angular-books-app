import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './book-item/book-item.component';
import { BookListComponent } from './book-list/book-list.component';



@NgModule({
  declarations: [BookItemComponent, BookListComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
