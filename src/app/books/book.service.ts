import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

  getPublisher(id){
    return this.http.get(`http://localhost:53050/api/publishers/${id}`);
  }

  getBooks(){
    return this.http.get(this.URL_BOOK);
  }

  getBook(id:string){
    return this.http.get(this.URL_BOOK + `/${id}`);
  }

  addBook(book) {    
    this.http.post(this.URL_BOOK,
    {
        "title": book['title'],
        "description": book['description'],
        "publisherId": book['publisher']
    })
    .subscribe(
        (val) => {
            console.log("Success", 
                        val);
        },
        response => {
            console.log("Error", response);
        },
        () => {
            console.log("Completed");
        });
  }

  updateBook(book, id) {  
    console.log(id)
    this.http.put(this.URL_BOOK + `/${id}`,
    {
        "id": id,
        "title": book['title'],
        "description": book['description'],
        "publisherId": book['publisher']
    })
    .subscribe(
        (val) => {
            console.log("Success", 
                        val);
        },
        response => {
            console.log("Error", response);
        },
        () => {
            console.log("Completed");
        });
  }

  deleteBook(id) {  
    console.log(id)
    this.http.delete(this.URL_BOOK + `/${id}`)
    .subscribe(
        (val) => {
            console.log("Success", 
                        val);
        },
        response => {
            console.log("Error", response);
        },
        () => {
            console.log("Completed");
        });
  }

}