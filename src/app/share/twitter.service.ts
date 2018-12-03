import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(public http: HttpClient) {
    this.http = http;
   }

   getPost(){
     return this.http.get("http://jsonplaceholder.typicode.com/posts");
   }
   getDetalle(id : number){
    return this.http.get("http://jsonplaceholder.typicode.com/comments/" + id);
  }
}
