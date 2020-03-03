import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao1: string;
  profissao2: string;
}

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {

  cliente = new Cliente();
  profissoes1 = ['Estagiário', 'Empresário', 'Outra'];
  profissoes2 = [
    {
      label: 'Estagiário'
    },
    {
      label: 'Programador'
    },
    {
      label: 'Empresário'
    },
    {
      label: 'Outra'
    }
  ];
  salvar(form: NgForm) {
    console.log(form.value);
  }

}
