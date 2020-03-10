import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PesquisaPessoaComponent } from './pesquisa-pessoa/pesquisa-pessoa.component';
import { TabelaPessoaComponent } from './tabela-pessoa/tabela-pessoa.component';
import { TableComponent } from './table/table.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormularioComponent,
    NavbarComponent,
    PesquisaPessoaComponent,
    TabelaPessoaComponent,
    TesteComponent,
    LancamentoCadastroComponent
  ],
  imports: [
    BrowserModule,
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
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
