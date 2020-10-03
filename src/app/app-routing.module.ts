import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BookListComponent } from './books/book-list/book-list.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'book/:id', component: BookItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
