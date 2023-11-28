import { Component } from '@angular/core';

@Component({
  selector: 'app-password-segun-datos',
  templateUrl: './password-segun-datos.component.html',
  styleUrls: ['./password-segun-datos.component.css']
})
export class PasswordSegunDatosComponent {

  nombre="";
  apellidoP="";
  apellidoM="";
  nacimiento="";

  longitudDatos=8;
  contraDatos="";
  caracteres="";


  generarSegunDatos(){
    this.contraDatos="";

    this.caracteres = this.nombre + this.apellidoP + this.apellidoM + this.nacimiento;

    for (let i = 0; i < this.longitudDatos; i++) {
      let random = Math.floor(Math.random() * this.caracteres.length);
      this.contraDatos += this.caracteres.charAt(random);
    }
    
  }

}
