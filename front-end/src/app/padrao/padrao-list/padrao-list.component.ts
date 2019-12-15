import { Component, OnInit } from '@angular/core';
import { PadraoService } from '../padrao.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-padrao-list',
  templateUrl: './padrao-list.component.html',
  styleUrls: ['./padrao-list.component.scss']
})
export class PadraoListComponent implements OnInit {

  public padroes: any = [];
  public displayedColumns: string[] = ['identificacao', 'equipamento', 'compriOnda', 'cubeta', 'coefAbsortividade', 'diluicaoP',
   'absorbanciaP', 'editar', 'excluir'];

  // Injeção do serviço no construtor
  constructor(
    private padraoSrv: PadraoService,
    private snackBar: MatSnackBar
  ) { }

  // async significa que esta função faz uso
  // de uma chamada assíncrona a outra função
  async ngOnInit() {
    try {
      this.padroes = await this.padraoSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {
    if (confirm('Deseja realmente excluir este padrão? ' +
      '(Esta ação não poderá ser desfeita)')) {
      try {
        await this.padraoSrv.excluir(id).toPromise();
        this.snackBar.open('Padrão excluída com sucesso.', 'Entendi',
          {duration: 3000});
        this.ngOnInit(); // Recarrega a lista
      } catch (erro) {
        console.error(erro);
      }
    }
  }

}

