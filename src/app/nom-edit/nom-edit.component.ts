import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Route } from '@angular/compiler/src/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { NombService } from '../services/nomb.service';
import { Car } from '../models/car';


@Component({
  selector: 'app-nom-edit',
  templateUrl: './nom-edit.component.html',
  styleUrls: ['./nom-edit.component.css'],
  providers : [UserService, NombService]
})
export class NomEditComponent implements OnInit {

  public page_title: string;
  public car: Car;
  public token;
  public status_car : string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _nombService: NombService,
  ) {
    
    this.token= this._userService.getToken();
    
   }

  ngOnInit() {
    this._route.params.subscribe(params =>{
      let id = +params['id']; 
    this.getCar(id);
  });
  }
  getCar(id){
    

      this._nombService.getCar(id).subscribe(
        response =>{
            if(response.status == 'success'){
              this.car = response.car;
              this.page_title = 'Editar ' + this.car.title;
            }else{
              this._router.navigate(['home']);
            }
        },
       error =>{
         console.log(<any>error);
       }
      );

    

  }


  onSubmit(form){
   console.log(this.car.id);
   this._nombService.update(this.token, this.car, this.car.id).subscribe(
     response =>{
      if(response.status =='success'){
        this.status_car = 'success';
        this.car = response.car;
        this._router.navigate(['/home']);
      //  this._router.navigate(['/coche', this.car.id]);

      }else  {
        this.status_car = 'error';

      }

     },
     error =>{
      console.log(<any>error);
      this.status_car = 'error';
     }

   );
     
  }
  

  





  

}
