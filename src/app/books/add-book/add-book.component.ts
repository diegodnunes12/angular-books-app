import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  publishers: any;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getPublishers().subscribe( (publishers:any) => {
      console.log(publishers)
      this.publishers = publishers;
    });
  }

  onSubmit(form): void {
    this.bookService.addBook(form.value);
  }

}
