import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  bookId: any;
  title: any;
  description: any;
  publisherId: any;
  publisher: any;

  constructor(private activeRouter: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe( params => {
      this.bookId = params.get('id');
      
      this.bookService.getBook(this.bookId)
        .subscribe( (book: any) => {
          this.title = book['title'];
          this.publisherId = book['publisherId'];
          this.description = book['description'];          
          this.bookService.getPublisher(this.publisherId).subscribe( (publisher:any) => {
            this.publisher = publisher['name'];
          });
        } );
    } );    
  }
}
