import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  publishers: any;
  response: any;
  books: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getPublishers().subscribe( (publishers:any) => {
      console.log(publishers)
      this.publishers = publishers;
    });
  }

  onSubmit(form){
    this.response = this.bookService.addBook(form.value);
    console.log(this.response);
  }

}
