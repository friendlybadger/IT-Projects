import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Grocery} from "../models/Grocery";
import { Observable } from 'rxjs';
import{catchError, tap}  from 'rxjs/operators';
import { ErrorHandlerService } from './error-handler.service';
@Injectable({
  providedIn: 'root'
})


export class GroceryListCrudService {
  
  private url="http://localhost:3000/groceries";

  httpOptions: {headers: HttpHeaders}= {
    headers: new HttpHeaders ({"content-Type": "application/json"}),
  }

  constructor(
    private errorHandlerService:ErrorHandlerService, 
    private http: HttpClient) { }

  fetchAll():Observable<Grocery[]>{
    return this.http.get<Grocery[]>(this.url, {responseType: "json"})
    .pipe(tap((_)=>console.log('fetch groceries')),
     catchError(    
      this.errorHandlerService.handlerError<Grocery[]>("fetchAll",[])
     ));
    // (err:HttpErrorResponse)=>{console.log(err)};
  }

  post(item: Partial<Grocery>): Observable<any>{
    console.log(item);
    
    return this.http.post<Partial<Grocery>>(this.url, item, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handlerError<any>("post"))
     );
  }

  update(grocery: Grocery): Observable<any>{
    
    return this.http.
    put<Grocery>(this.url, grocery, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handlerError<any>("update")));
  }
  delete (id: number): Observable<any>{
    const url=`http://localhost:3000/groceries/${id}`;
    return this.http
    .delete<Grocery>(url, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handlerError<any>("delete")));
  }
  
}
