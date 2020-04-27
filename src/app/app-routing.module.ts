import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { RegistroComponent } from './registro/registro.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent}
  ,{ path: 'registro', component: RegistroComponent }
  ,{ path: 'pregunta/:is', canActivate: [AuthGuard], component: PreguntaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}