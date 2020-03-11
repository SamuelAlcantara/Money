import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-lancamento',
  templateUrl: './pesquisa-lancamento.component.html',
  styleUrls: ['./pesquisa-lancamento.component.css']
})
export class PesquisaLancamentoComponent implements OnInit {
  vencimento: Date;
  ate: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
