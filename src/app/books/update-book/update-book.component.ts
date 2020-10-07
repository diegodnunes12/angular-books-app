import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookId: string;
  book: any;
  title: any;
  publisherId: any;
  publishers: any;
  description: any;
  id: any;
  isSuccess: boolean;

  constructor(private activeRouter: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {

    this.activeRouter.paramMap.subscribe( params => {
      this.bookId = params.get('id');
      
      this.bookService.getBook(this.bookId)
        .subscribe( (book: any) => {
          this.title = book['title'];
          console.log(book['publisherId']);
          this.publisherId = book['publisherId'];
          this.description = book['description'];
        } );

    } );

    this.bookService.getPublishers().subscribe( (publishers:any) => {
      this.publishers = publishers;
    });
  }

  onSubmit(form){
    try {
      this.bookService.updateBook(form.value, this.bookId);
      this.isSuccess = true;
    } catch (error) {
      this.isSuccess = false;
    }
  }

}
