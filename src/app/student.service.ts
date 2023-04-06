import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public URL:string="https://62b9299dff109cd1dc8ca34f.mockapi.io/students";
  constructor(private _httpclient:HttpClient) { }

  getAllStudents():Observable<any>{
    return this._httpclient.get(this.URL)
   };
   createAllStudent(data:any):Observable<any>{
    return this._httpclient.post(this.URL,data);
  };
  deleteAllStudents(id:string):Observable<any>{
    return this._httpclient.delete(this.URL+"/"+id);
  };

}
