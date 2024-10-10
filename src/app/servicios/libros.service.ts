import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http:HttpClient) {

  }
 private  url="http://127.0.0.1:8000/api/libros";

  getAll(){
    return this.http.get(this.url);
  }

  find(id:any){
    return this.http.get(this.url+'/'+id);
  }
  delete(id:any){
    return  this.http.delete(this.url+'/'+id);

  }

  create(libro:any){
    return this.http.post(this.url,libro);
  }


}
