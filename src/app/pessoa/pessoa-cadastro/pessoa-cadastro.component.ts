import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent implements OnInit {

  estados = [
    {value: {id: 1, sigla: 'AC'}, label: 'Acre'},
    {value: {id: 2, sigla: 'AL'}, label: 'Alagoas'},
    {value: {id: 3, sigla: 'AP'}, label: 'Amapá'},
    {value: {id: 4, sigla: 'AM'}, label: 'Amazonas'},
    {value: {id: 5, sigla: 'BA'}, label: 'Bahia'},
    {value: {id: 6, sigla: 'CE'}, label: 'Ceará'},
    {value: {id: 7, sigla: 'ES'}, label: 'Espírito Santo'},
    {value: {id: 8, sigla: 'GO'}, label: 'Goiás'},
    {value: {id: 9, sigla: 'MA'}, label: 'Maranhão'},
    {value: {id: 10, sigla: 'MT'}, label: 'Mato Grosso'},
    {value: {id: 11, sigla: 'MS'}, label: 'Mato Grosso do Sul'},
    {value: {id: 12, sigla: 'MG'}, label: 'Minas Gerais'},
    {value: {id: 13, sigla: 'PA'}, label: 'Pará'},
    {value: {id: 14, sigla: 'PB'}, label: 'Paraíba'},
    {value: {id: 15, sigla: 'PR'}, label: 'Paraná'},
    {value: {id: 16, sigla: 'PE'}, label: 'Pernambuco'},
    {value: {id: 17, sigla: 'PI'}, label: 'Piauí'},
    {value: {id: 18, sigla: 'RJ'}, label: 'Rio de Janeiro'},
    {value: {id: 19, sigla: 'RN'}, label: 'Rio Grande do Norte'},
    {value: {id: 20, sigla: 'RS'}, label: 'Rio Grande do Sul'},
    {value: {id: 21, sigla: 'RO'}, label: 'Rondônia'},
    {value: {id: 22, sigla: 'RR'}, label: 'Roraima'},
    {value: {id: 23, sigla: 'SC'}, label: 'Santa Catarina'},
    {value: {id: 24, sigla: 'SP'}, label: 'São Paulo'},
    {value: {id: 25, sigla: 'SE'}, label: 'Sergipe'},
    {value: {id: 26, sigla: 'TO'}, label: 'Tocantins'},
    {value: {id: 27, sigla: 'DF'}, label: 'Distrito Federal'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
