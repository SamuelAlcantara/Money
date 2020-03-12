import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaTabelaComponent } from './pessoa-tabela.component';

describe('PessoaTabelaComponent', () => {
  let component: PessoaTabelaComponent;
  let fixture: ComponentFixture<PessoaTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
