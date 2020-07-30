import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { NomNewComponent } from './nom-new/nom-new.component';
import { NomEditComponent } from './nom-edit/nom-edit.component';
import { NomDetailComponent } from './nom-detail/nom-detail.component';
import { PersonNewComponent} from './person-new/person-new.component';
import { VistaPersonaComponent } from './vista-persona/vista-persona.component';
import { AlumnoNewComponent} from './alumno-new/alumno-new.component';
import { ExperiencialaboralNewComponent } from './experiencialaboral-new/experiencialaboral-new.component'

import { CursosComponent } from './components/cursos/cursos.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';

import { ProfileComponent } from './components/profile/profile.component';
import { ProfileCodigoComponent } from './components/profile-codigo/profile-codigo.component';
import { ProfileDatosLaboralesComponent } from './components/profile-datos-laborales/profile-datos-laborales.component';
import { ProfileDatosPersonalesComponent } from './components/profile-datos-personales/profile-datos-personales.component';
import { ProfileDatosPersonalesListaComponent } from './components/profile-datos-personales-lista/profile-datos-personales-lista.component';
import { ProfileDatosUniversitariosComponent } from './components/profile-datos-universitarios/profile-datos-universitarios.component';


const routes: Routes = [
  {path: '', component: HomeComponent},  //inicio
  {path: 'cursos', component: CursosComponent},
  {path: 'eventos', component: EventosComponent},  //
  {path: 'home', component: HomeComponent},  //
  {path: 'login', component: LoginComponent},  //
  {path: 'profile', component: ProfileComponent},  //
  {path: 'profile/codigo', component: ProfileCodigoComponent},  //
  {path: 'profile/laboral', component: ProfileDatosLaboralesComponent},  //
  {path: 'profile/personal', component: ProfileDatosPersonalesComponent},  //
  {path: 'profile/personal-lista', component: ProfileDatosPersonalesListaComponent},  //
  {path: 'profile/universitario', component: ProfileDatosUniversitariosComponent},  //
  {path: 'logout/:sure', component: LoginComponent },  //
  {path: 'register', component: RegisterComponent},  //

  {path: 'crear-nombre',component:NomNewComponent},  ///
  {path: 'editar-nombre/:id', component:NomEditComponent},  //
  {path: 'nombre/:id',component:NomDetailComponent},      // detalle curso
  {path: 'crear-persona',component:PersonNewComponent},  // crear datos personales
  {path: 'vista-persona', component: VistaPersonaComponent }, // visualizar datos de persona que se registro
  {path: 'datos-alumno', component: AlumnoNewComponent},   // Alumno datos crear
  {path: 'Experiencia-laboral', component: ExperiencialaboralNewComponent  }, // Experiencia Laboral crear

  {path: '**', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingProviders: any[] = [];
//export const routing:  ModuleWitthProviders = RouterModule.forRoot(appRoutes);
