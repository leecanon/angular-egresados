import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params} from '@angular/router';
import { UserService,  } from '../../services/user.service';
import {  FichaegresoService} from '../../services/fichaegreso.service';
//import { Alumno} from '../../models/alumnos';
import { Fichaegreso} from '../../models/fichaegresos';

@Component({
  selector: 'app-profile-datos-universitarios',
  templateUrl: './profile-datos-universitarios.component.html',
  styleUrls: ['./profile-datos-universitarios.component.css'],
  providers: [UserService,FichaegresoService]
})
export class ProfileDatosUniversitariosComponent implements OnInit {

  public page_title: string;
  public identity;
  public token;
  public fichaegresos: Fichaegreso;
  public status_fichaegresos : string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _UserService: UserService,
    private _fichaegresoService: FichaegresoService


  ) {
    this.page_title = 'Fecha de Ingreso Al Universidad UPeU';
    this.identity = this._UserService.getIdentity();
    this.token= this._UserService.getToken();


   }

  ngOnInit (){
    if(this.identity == null ){
      this._router.navigate(["/login"]);

    }else{
      //crear objeto usuariio
      this.fichaegresos = new Fichaegreso(1,'','','','','', null,null);


    }



  }
  onSubmit(form){
    this._fichaegresoService.create(this.token, this.fichaegresos).subscribe(
      response =>{
        //console.log(response);
        if(response.status == 'success'){
          this.fichaegresos = response.fichaegresos;
          this.status_fichaegresos = 'success';
          this._router.navigate(['/hoja-vida']);

        } else{
          this.status_fichaegresos = 'error';

        }
       // this.car = response.car;

      },
      error => {
        console.log(<any>error);
        this.status_fichaegresos = 'error';

      }

    );
  }

}
