import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {GLOBAL} from './global';
import {Universidad} from '../models/universidads';

@Injectable()

export class UniversidadService {
  public url: string;
    


    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }   
 pruebas(){
     return "hola mundo!!";
 }
  create(token, universidads: Universidad): Observable<any>{
   let json = JSON.stringify(universidads);
   let params ="json="+json;


   
   let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token) ;

       return this._http.post(this.url + 'universidad',params, {headers: headers});                           
 }
 getUniversidads(): Observable<any>{
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
   return this._http.get(this.url + 'universidad', {headers: headers});

 }
 //getCars(): Observable<any>{
  // return this._http.get(this.url + 'cars', {headers: headers});
// }
getUniversidad(universidad_id): Observable<any>{
  return this._http.get(this.url + 'universidad/' + universidad_id);
}

}