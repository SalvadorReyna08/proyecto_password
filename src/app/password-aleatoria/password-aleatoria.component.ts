import { Component } from '@angular/core';

@Component({
  selector: 'app-password-aleatoria',
  templateUrl: './password-aleatoria.component.html',
  styleUrls: ['./password-aleatoria.component.css']
})

export class PasswordAleatoriaComponent {

  caracteres="";
  contra="";
  longitud=8;

  segu="poco";

  generar(){
    this.contra="";

    let letras = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const simbolos = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if(this.segu === "poco"){
      this.caracteres=letras;
    }

    if(this.segu === "medio"){
      this.caracteres=letras + numeros;
   }

    if(this.segu === "muy"){
      this.caracteres = letras + numeros + simbolos;
    }

    for (let i = 0; i < this.longitud; i++) {
      let random = Math.floor(Math.random() * this.caracteres.length);
      this.contra += this.caracteres.charAt(random);
    }
    
  }

}
