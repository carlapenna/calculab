import { Component, OnInit } from '@angular/core';
import { AmostraService } from '../amostra.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-amostra-list',
  templateUrl: './amostra-list.component.html',
  styleUrls: ['./amostra-list.component.scss']
})
export class AmostraListComponent implements OnInit {

  public amostras: any = [];
  public displayedColumns: string[] = ['identificacao', 'equipamento', 'compriOnda', 'cubeta', 'coefAbsortividade', 'absorbancia', 
  'padrao', 'editar', 'excluir'];

  // Injeção do serviço no construtor
  constructor(
    private amostraSrv: AmostraService,
    private snackBar: MatSnackBar
  ) { }

  // async significa que esta função faz uso
  // de uma chamada assíncrona a outra função
  async ngOnInit() {
    try {
      this.amostras = await this.amostraSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {
    if (confirm('Deseja realmente excluir esta amostra? ' +
      '(Esta ação não poderá ser desfeita)')) {
      try {
        await this.amostraSrv.excluir(id).toPromise();
        this.snackBar.open('Amostra excluída com sucesso.', 'Entendi',
          {duration: 3000});
        this.ngOnInit(); // Recarrega a lista
      } catch (erro) {
        console.error(erro);
      }
    }
  }

}
