import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
 
  elementos = [
    { nombre: 'Ricardo', apellido: 'jofré', rut: '187735629', edad: 26 },
    { nombre: 'Juan', apellido: 'jofré', rut: '18745629', edad: 56 },
    { nombre: 'Alexis', apellido: 'jofré', rut: '132335629', edad: 66 },
    { nombre: 'Arturo', apellido: 'jofré', rut: '134223424', edad: 36 },
  ];
}
