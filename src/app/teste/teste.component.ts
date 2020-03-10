import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao: '';
}

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {

  cliente = new Cliente();
  profissoes = ['Estagiário', 'Empresário', 'Programador', 'Outra'];
  salvar(form: NgForm) {
    this.cliente = form.value;
    console.log(this.cliente);
    form.reset({profissao: ''});
  }

}
