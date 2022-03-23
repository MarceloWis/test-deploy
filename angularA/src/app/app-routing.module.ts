import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { AuthGuard } from './app.authguard';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

const routes: Routes = [
  // {
  //   path: 'with',
  //   canActivate: [KeycloakAuthGuard],
  //   component: AppModule,
  // },
  {
    path: '',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // providers: [AuthGuard],
  exports: [RouterModule],
})

export class AppRoutingModule { }
