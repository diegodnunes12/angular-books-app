import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  postId: any;

  constructor(private http: HttpClient) { }

  public URL_BOOK = `http://localhost:53050/api/books`;

  getPublishers(){
    return this.http.get(`http://localhost:53050/api/publishers`);
  }

  getBooks(){
    return this.http.get(this.URL_BOOK);
  }

  addBook(book) {

    console.log(book)
    return this.http.post<any>(this.URL_BOOK, book).subscribe(data => {
      this.postId = data.id;
      console.log(this.postId);
    });
  }
}
