import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  bookId: string;
  isSuccess: boolean;

  constructor(private activeRouter: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    
  }
  
  onClick() { 
    this.activeRouter.paramMap.subscribe( params => {
      this.bookId = params.get('id');      
      try {
        this.bookService.deleteBook(this.bookId);
        this.isSuccess = true;
        
      } catch (error) {
        this.isSuccess = true;
      }
    } );
  } 
}
