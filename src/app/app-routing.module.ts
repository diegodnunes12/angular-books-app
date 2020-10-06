import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BookItemComponent } from './books/book-item/book-item.component';
import { BookListComponent } from './books/book-list/book-list.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'novo', component: AddBookComponent},
  {path: 'detalhes/:id', component: BookItemComponent},  
  {path: 'editar/:id', component: AddBookComponent},
  {path: 'deletar/:id', component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
