import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Route } from '@angular/compiler/src/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import {  PersonaService} from '../../services/persona.service';
import { Persona } from '../../models/personas';

@Component({
  selector: 'app-profile-datos-personales-lista',
  templateUrl: './profile-datos-personales-lista.component.html',
  styleUrls: ['./profile-datos-personales-lista.component.css'],
  providers: [UserService, PersonaService]
})
export class ProfileDatosPersonalesListaComponent implements OnInit {

  public title: string;
  public persona: Array<Persona>;
  public identity;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _personaService: PersonaService
  ) {
    this.title = 'Datos Personales';
   }

  ngOnInit() {
    console.log('defaul.component cargado correctamente');
    this._personaService.getPersonas().subscribe(
      response =>{
        if(response.status =='success'){
          this.persona = response.persona;

        }
        //console.log(response);
      },
      error =>{
        console.log(error);
      }

    );

  }
  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity != "undefined"){
        this.identity = identity;

    }else{
        this.identity = null;
    }
    return this.identity;

}

}
