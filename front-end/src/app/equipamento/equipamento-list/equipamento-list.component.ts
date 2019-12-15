import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../equipamento.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-equipamento-list',
  templateUrl: './equipamento-list.component.html',
  styleUrls: ['./equipamento-list.component.scss']
})
export class EquipamentoListComponent implements OnInit {

  public equipamentos: any = [];
  public displayedColumns: string[] = ['nome', 'editar', 'excluir'];

  // Injeção do serviço no construtor
  constructor(
    private equipamentoSrv: EquipamentoService,
    private snackBar: MatSnackBar,
  ) {}

  // async significa que esta função faz uso de uma chamada assíncrona a outra função
  async ngOnInit() {
    try {
      this.equipamentos = await this.equipamentoSrv.listar();
    } catch (erro) {
      console.error(erro);
    }
  }

  async excluir(id: string) {
    if (confirm('Deseja realmente excluir este equipamento? ' + 'Esta ação não poderá ser desfeita')) {
      try {
        await this.equipamentoSrv.excluir(id).toPromise();
        this.snackBar.open('Equipamento excluído com sucesso.', 'Entendi', {duration: 3000});
        this.ngOnInit(); //Recarrega a lista
      } catch (erro) {
        console.error(erro);
      }
    }
  }
}
