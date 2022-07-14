import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {
url:string='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {   }
  users(){
    return this.http.get(this.url);

  }
}
