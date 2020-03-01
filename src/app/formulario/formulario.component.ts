import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  vencimento: Date;
  ate: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
