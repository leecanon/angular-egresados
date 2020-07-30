import { Component, OnInit } from '@angular/core';
import { UserService}  from '../../services/user.service';

import {main} from './js/main.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',

  './lib/font-awesome/css/font-awesome.min.css',
  './lib/animate/animate.min.css',
  './lib/ionicons/css/ionicons.min.css',
  './lib/owlcarousel/assets/owl.carousel.min.css',
  './lib/lightbox/css/lightbox.min.css',
  './css/style.css',
  './lib/bootstrap/css/bootstrap.min.css']
})
export class HomeComponent implements OnInit {

  public identity;
  public token;

  constructor(
    private _userService: UserService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

}
