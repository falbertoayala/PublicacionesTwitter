import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DetalletwittService {

  constructor(public  http : HttpClient) {

    this.http = http;
   }

   getDetalle(id : number){
     return this.http.get("http://jsonplaceholder.typicode.com/comments"+ id);
   }
}
