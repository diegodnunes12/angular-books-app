import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  publishers: any;
  response: any;
  books: any;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getPublishers().subscribe( (publishers:any) => {
      this.publishers = publishers;
    });
  }

  onSubmit(form){
    this.bookService.addBook(form.value);
    this.router.navigate(['/'])
  }

}
