import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfiliatesComponent } from './components/afiliates/afiliates.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentComponent } from './components/document/document.component';
import { ErrorComponent } from './components/error/error.component';
import { ForgetComponent } from './components/forget/forget.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PassSendComponent } from './components/pass-send/pass-send.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/iniciar-sesion'
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent,
  },
  {
    path: 'inicio',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'afiliados',
        component: AfiliatesComponent,
      },
      {
        path: 'documentos',
        component: DocumentComponent,
      }
    ]
  },
  {
    path: 'olvidar-pass',
    component: ForgetComponent,
  },
  {
    path: 'enviar-pass',
    component: PassSendComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
