import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService}  from './services/user.service';
import { HttpClient } from '@angular/common/http';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public identity;
  public token;
  url = 'http://127.0.0.1:8000/api/estudiantes';
  items = [];


  title = 'FrontendEgresados';
  constructor(
    private _userService: UserService
  ){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }
  ngOnInit(){
    console.log('app.component cargado');
  }
  //es el encargado de actualizar el formulario por eso es necesario
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

  }
}
