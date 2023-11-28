import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PasswordSegunDatosComponent } from './password-segun-datos/password-segun-datos.component';
import { PasswordAleatoriaComponent } from './password-aleatoria/password-aleatoria.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordSegunDatosComponent,
    PasswordAleatoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
