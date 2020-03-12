import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaTabelaComponent } from './pessoa-tabela/pessoa-tabela.component';

@NgModule({
  declarations: [PessoaPesquisaComponent, PessoaCadastroComponent, PessoaTabelaComponent],
  exports: [PessoaPesquisaComponent, PessoaCadastroComponent, PessoaTabelaComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    CalendarModule,
    TooltipModule,
    DropdownModule,
    InputTextareaModule,
    SelectButtonModule,
    CurrencyMaskModule,
    InputMaskModule,
    FormsModule
  ]
})
export class PessoaModule { }
