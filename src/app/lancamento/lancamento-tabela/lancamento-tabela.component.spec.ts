import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoTabelaComponent } from './lancamento-tabela.component';

describe('LancamentoTabelaComponent', () => {
  let component: LancamentoTabelaComponent;
  let fixture: ComponentFixture<LancamentoTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancamentoTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancamentoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
