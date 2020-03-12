import { Component } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent {
  dataVencimento: Date;
  dataAte: Date;
  categorias = [
    {label: 'Alimentação', value: 1},
    {label: 'Transporte', value: 2},
    {label: 'Educação', value: 3},
    {label: 'Outro', value: 4}
  ];
  pessoas = [
    {label: 'Samuel', value: 1},
    {label: 'Eunice', value: 2},
    {label: 'Sebastião', value: 3},
    {label: 'Elyakin', value: 4}
  ];
  lancamento = [
    {label: 'Receita', value: 'RECEITA'},
    {label: 'Despesas', value: 'DESPESA'}
  ];
}
