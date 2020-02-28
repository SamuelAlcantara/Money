import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {TooltipModule} from 'primeng/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PesquisaPessoaComponent } from './pesquisa-pessoa/pesquisa-pessoa.component';
import { TabelaPessoaComponent } from './tabela-pessoa/tabela-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormularioComponent,
    NavbarComponent,
    PesquisaPessoaComponent,
    TabelaPessoaComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    CalendarModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
