import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;
  publisher: any;

  constructor(private bookService: BookService) { }

  async ngOnInit(): Promise<void> {
    await this.bookService.getBooks().subscribe( (books:any) => {
      this.books = books;

      this.books.forEach(book => {
        console.log()
        this.bookService.getPublisher(book['publisherId']).subscribe( (publisher:any) => {
          book['publisher'] = publisher['name'];
        });
      });
    });
  }

}
