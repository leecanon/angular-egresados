import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Route } from '@angular/compiler/src/core';
import { User } from '../../models/user';
import { Car } from '../../models/car';
import { UserService } from '../../services/user.service';
import { NombService } from '../../services/nomb.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers : [UserService, NombService]
})
export class CursosComponent implements OnInit {

  public title: string;
  public cars: Array<Car>;
  public identity;
  public token;



  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _nombService: NombService,
  ) {
    this.title = 'Cursos y más';
    this.token = this._userService.getToken();


   }
   public data = [
    {name: 'Pedro', email: 'a10@upeu.edu.pe', website:'www.upeu.edu.pe'},
    {name: 'Joel', email: 'asdad123@upeu.edu.pe', website:'www.upeu.edu.pe'},
    {name: 'Aeaea', email: '12sasa@upeu.edu.pe', website:'www.upeu.edu.pe'},
    {name: 'CCarlos', email: 'asvq13@upeu.edu.pe', website:'www.upeu.edu.pe'},
    {name: 'Anandfkjsad', email: 'xcasknasjkdnak@upeu.edu.pe', website:'www.upeu.edu.pe'},
    {name: 'Profe', email: 'jhgfd@upeu.edu.pe', website:'www.upeu.edu.pe'},
    {name: 'Miss', email: 'uytre@upeu.edu.pe', website:'www.upeu.edu.pe'},
    {name: 'Pastor', email: '4313@upeu.edu.pe', website:'www.upeu.edu.pe'},
    {name: 'Alguien', email: '845363@upeu.edu.pe', website:'www.upeu.edu.pe'},
    {name: 'Aea', email: '14223434352sd@upeu.edu.pe', website:'www.upeu.edu.pe'},
  ];
   dtOptions: DataTables.Settings = {};

  ngOnInit() {
    console.log('defaul.component cargado correctamente');
   this.getCars();

   this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
    lengthMenu : [5, 10, 25],
    processing: true,

    language:{
      search:'Buscar:',
      searchPlaceholder: 'Busca, busca',
      emptyTable: "No se encontraron resultados con la búsqueda",
      zeroRecords: "No se encontraron resultados con la búsqueda",
      lengthMenu: "Mostrar _MENU_ resultados",
      info: "Mostrando _END_ de _TOTAL_ de _MAX_ en total | Página _PAGE_ de _PAGES_ ",
      infoEmpty: "Nada coincide ",
      //infoFiltered: "de _MAX_ egresados en total ",
      infoFiltered: "",
      infoPostFix: "| Todos los datos son de egresados reales",

      paginate: {
        first:    '« Primero «',
        previous: '‹ Atrás',
        next:     '› Siguiente',
        last:     '» Último »'
      },
      aria: {
        sortAscending:'',
        sortDescending:'',
        paginate: {
          first:    'Primero',
          previous: 'Anterior',
          next:     'Siguiente',
          last:     'Último'
        },
        }


    }

  };

  }

  getCars(){
    this._nombService.getCars().subscribe(
      response =>{
        if(response.status =='success'){
          this.cars = response.cars;
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

  deleteCar(id){
    this._nombService.delete(this.token, id).subscribe(
      response =>{
        this.getCars();
        // this._router.navigate['home'];
      },
      error =>{
        console.log(<any>error);
      }
    );
  }





}
