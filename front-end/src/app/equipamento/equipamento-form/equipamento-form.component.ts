import { Component, OnInit } from '@angular/core';
import { EquipamentoService } from '../equipamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-equipamento-form',
  templateUrl: './equipamento-form.component.html',
  styleUrls: ['./equipamento-form.component.scss']
})
export class EquipamentoFormComponent implements OnInit {

  titulo = 'Novo equipamento';
  equipamento: any = {}; // Objeto vazio

  constructor(
    private equipamentoSrv: EquipamentoService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    // Descobrindo a rota de origem
    if (this.actRoute.snapshot.params.id) {
      // Temos o parâmetro id
      const id = this.actRoute.snapshot.params.id;
      this.titulo = 'Editar equipamento';
      // Buscando no back-end o equipamento correspondente ao id
      try {
        this.equipamento = await this.equipamentoSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
  }

  async salvar() {
    try {
      if (this.equipamento._id) { //Tem _id; atualizar
        await this.equipamentoSrv.atualizar(this.equipamento).toPromise();
        this.snackBar.open('Equipamento atualizado com sucesso', 'Entendi', {duration: 3000});
      } else {
        await this.equipamentoSrv.novo(this.equipamento).toPromise();
        this.snackBar.open('Equipamento criado com sucesso', 'Entendi', {duration: 3000});
      }
      this.router.navigate(['equipamento']); // Volta para a listagem
    } catch (erro) {
      console.error(erro);
    }
  }

  voltar(form: any) {
    const msg = 'Há alterações não salvas. Deseja realmente voltar?';
    if (form.dirty && !confirm(msg)) {
      return; // Não faz nada
    }
    this.router.navigate(['equipamento']);
  }

}
