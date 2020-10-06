import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BookItemComponent } from './book-item/book-item.component';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';


@NgModule({
  declarations: [BookItemComponent, BookListComponent, AddBookComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: []
})
export class BooksModule { }
