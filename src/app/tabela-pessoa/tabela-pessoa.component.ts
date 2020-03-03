import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-pessoa',
  templateUrl: './tabela-pessoa.component.html',
  styleUrls: ['./tabela-pessoa.component.css']
})
export class TabelaPessoaComponent implements OnInit {

  pessoas = [];

  constructor() { }

  ngOnInit(): void {
    this.pessoas = [
      {
        nome: 'Samuel', cidade: 'São Paulo', estado: 'SP', status: 'Ativo'
      },
      {
        nome: 'Sebastião', cidade: 'São Luís', estado: 'MA', status: 'Ativo'
      },
      {
        nome: 'Eunice', cidade: 'São Luís', estado: 'MA', status: 'Ativo'
      },
      {
        nome: 'Elyakin', cidade: 'Bom Jardim', estado: 'MA', status: 'Ativo'
      },
      {
        nome: 'Jarlene', cidade: 'Bom Jardim', estado: 'MA', status: 'Ativo'
      },
      {
        nome: 'Pedro', cidade: 'Bom Jardim', estado: 'MA', status: 'Ativo'
      },
      {
        nome: 'Emanuel', cidade: 'Monção', estado: 'MA', status: 'Inativo'
      },
      {
        nome: 'André', cidade: 'Vitória', estado: 'ES', status: 'Ativo'
      },
      {
        nome: 'Manoel', cidade: 'Uberlândia', estado: 'MG', status: 'Ativo'
      },
      {
        nome: 'Carla', cidade: 'Florianópolis', estado: 'SC', status: 'Inativo'
      },
      {
        nome: 'Vilmar', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'Inativo'
      },
      {
        nome: 'Erivaldo', cidade: 'Belém', estado: 'PA', status: 'Ativo'
      },
      {
        nome: 'João', cidade: 'Rio Branco', estado: 'AC', status: 'Inativo'
      },
      {
        nome: 'Hosana', cidade: 'Rio de Janeiro', estado: 'RJ', status: 'Ativo'
      },
      {
        nome: 'Ellen', cidade: 'Parauapebas', estado: 'PA', status: 'Ativo'
      },
      {
        nome: 'Raphaela', cidade: 'Teresina', estado: 'PI', status: 'Ativo'
      },
      {
        nome: 'Luís', cidade: 'Curitiba', estado: 'PR', status: 'Inativo'
      }
    ];
  }

}
