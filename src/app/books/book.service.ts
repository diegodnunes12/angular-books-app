import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getPublishers(){
    return this.http.get('http://localhost:53050/api/publishers');
  }

  getBooks(){
    return this.http.get('http://localhost:53050/api/books');
  }

  addBook(book){
    console.log(book);
  }


}
