import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { AppComponent } from './app.component';
import {LoginComponent} from './components/login/login.component';

import { RegisterComponent} from './components/register/register.component';
import { DefaultComponent } from './default/default.component';
import { NomNewComponent } from './nom-new/nom-new.component';
import { NomEditComponent } from './nom-edit/nom-edit.component';
import { NomDetailComponent } from './nom-detail/nom-detail.component';
import { PersonNewComponent } from './person-new/person-new.component';
import { VistaPersonaComponent } from './vista-persona/vista-persona.component';
import { AlumnoNewComponent } from './alumno-new/alumno-new.component';
import { ExperiencialaboralNewComponent } from './experiencialaboral-new/experiencialaboral-new.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileCodigoComponent } from './components/profile-codigo/profile-codigo.component';
import { ProfileDatosLaboralesComponent } from './components/profile-datos-laborales/profile-datos-laborales.component';
import { ProfileDatosPersonalesComponent } from './components/profile-datos-personales/profile-datos-personales.component';
import { ProfileDatosUniversitariosComponent } from './components/profile-datos-universitarios/profile-datos-universitarios.component';
import { ProfileDatosPersonalesListaComponent } from './components/profile-datos-personales-lista/profile-datos-personales-lista.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DefaultComponent,
    NomNewComponent,
    NomEditComponent,
    NomDetailComponent,
    PersonNewComponent,
    VistaPersonaComponent,
    AlumnoNewComponent,
    ExperiencialaboralNewComponent,
    NavbarComponent,
    CursosComponent,
    HomeComponent,
    EventosComponent,
    ProfileComponent,
    ProfileCodigoComponent,
    ProfileDatosLaboralesComponent,
    ProfileDatosPersonalesComponent,
    ProfileDatosUniversitariosComponent,
    ProfileDatosPersonalesListaComponent,
    NavbarHomeComponent,
    //FormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule



  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
