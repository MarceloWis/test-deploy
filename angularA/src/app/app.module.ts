import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

// import { AppAuthGuard } from './app.authguard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'anfitriaoprime',
        clientId: 'kong'
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: true,
      },
    });
}

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule],
  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: initializeKeycloak,
  //     multi: true,
  //     deps: [KeycloakService]
  //   },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {}