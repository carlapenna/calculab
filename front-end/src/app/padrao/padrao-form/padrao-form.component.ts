import { Component, OnInit } from '@angular/core';
import { PadraoService } from '../padrao.service';
import { EquipamentoService } from '../../equipamento/equipamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-padrao-form',
  templateUrl: './padrao-form.component.html',
  styleUrls: ['./padrao-form.component.scss']
})
export class PadraoFormComponent implements OnInit {

  titulo = 'Novo Padrão';
  padrao: any = {}; // Objeto Vazio

  equipamentos: any = []; // Vetor Vazio

  constructor(
    private padraoSrv: PadraoService,
    private equipamentoSrv: EquipamentoService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }

  async ngOnInit() {
    // Descobrindo a rota de origem
    if (this.actRoute.snapshot.params.id) {
      // Temos o parâmetro id
      const id = this.actRoute.snapshot.params.id;
      this.titulo = 'Editar padrão';
      // Buscando no back-end o padrão correspondente ao id
      try {
        this.padrao = await this.padraoSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
    this.carregarListas();
  }

  async carregarListas() {
    try {
      this.equipamentos = await this.equipamentoSrv.listar().toPromise();
    } catch (erro) {
      console.error(erro);
    }
  }

  async salvar() {
    try {
      if (this.padrao._id) { //Tem _id; atualizar
        await this.padraoSrv.atualizar(this.padrao).toPromise();
        this.snackBar.open('Padrão atualizado com sucesso', 'Entendi', {duration: 3000});
      } else {
        await this.padraoSrv.novo(this.padrao).toPromise();
        this.snackBar.open('Padrão criado com sucesso', 'Entendi', {duration: 3000});
      }
      this.router.navigate(['padrao']); // Volta para a listagem
    } catch (erro) {
      console.error(erro);
    }
  }

  voltar(form: any) {
    const msg = 'Há alterações não salvas. Deseja realmente voltar?';
    if (form.dirty && !confirm(msg)) {
      return; // Não faz nada
    }
    this.router.navigate(['padrao']);
  }
}

