import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {GLOBAL} from './global';
import {Fichaegreso} from '../models/fichaegresos';

@Injectable()

export class FichaegresoService {
  public url: string;
    


    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }   
 pruebas(){
     return "hola mundo!!";
 }
  create(token, fichaegresos: Fichaegreso): Observable<any>{
   let json = JSON.stringify(fichaegresos);
   let params ="json="+json;


   
   let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token) ;

       return this._http.post(this.url + 'fichaegreso',params, {headers: headers});                           
 }
 getFichaegresos(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this._http.get(this.url + 'fichaegreso', {headers: headers});

 }
 //getCars(): Observable<any>{
  // return this._http.get(this.url + 'cars', {headers: headers});
// }
getFichaegreso(fichaegreso_id): Observable<any>{
  return this._http.get(this.url + 'fichaegreso/' + fichaegreso_id);
}

}