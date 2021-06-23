import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input() datos!: any;
  mensaje: string = "Bienvenidos";
  constructor() { }

  ngOnInit(): void {
  }
  // nombre = 'Ricardo Antonio';
  // apellido = 'Jofré Quijada';
  // rut = '187735629';
  // edad = '26';


}
