import { Component, OnInit } from '@angular/core';
import { AmostraService } from '../amostra.service';
import { EquipamentoService } from '../../equipamento/equipamento.service';
import { PadraoService } from '../../padrao/padrao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-amostra-form',
  templateUrl: './amostra-form.component.html',
  styleUrls: ['./amostra-form.component.scss']
})
export class AmostraFormComponent implements OnInit {

  titulo = 'Nova Amostra';
  amostra: any = {}; // Objeto Vazio

  equipamentos: any = []; // Vetor Vazio
  padroes: any = [];

  constructor(
    private amostraSrv: AmostraService,
    private equipamentoSrv: EquipamentoService,
    private padraoSrv: PadraoService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  async ngOnInit() {
    // Descobrindo a rota de origem
    if (this.actRoute.snapshot.params.id) {
      // Temos o parâmetro id
      const id = this.actRoute.snapshot.params.id;
      this.titulo = 'Editar amostra';
      // Buscando no back-end a cubeta correspondente ao id
      try {
        this.amostra = await this.amostraSrv.obterUm(id).toPromise();
      } catch (erro) {
        console.error(erro);
      }
    }
    this.carregarListas();
  }

  async carregarListas() {
    try {
      this.equipamentos = await this.equipamentoSrv.listar().toPromise();
      this.padroes = await this.padraoSrv.listar().toPromise();
    } catch (erro) {
      console.error(erro);
    }
  }

  async salvar() {
    try {
      if (this.amostra._id) { //Tem _id; atualizar
        await this.amostraSrv.atualizar(this.amostra).toPromise();
        this.snackBar.open('Amostra atualizada com sucesso', 'Entendi', {duration: 3000});
      } else {
        await this.amostraSrv.novo(this.amostra).toPromise();
        this.snackBar.open('Amostra criada com sucesso', 'Entendi', {duration: 3000});
      }
      this.router.navigate(['amostra']); // Volta para a listagem
    } catch (erro) {
      console.error(erro);
    }
  }

  voltar(form: any) {
    const msg = 'Há alterações não salvas. Deseja realmente voltar?';
    if (form.dirty && !confirm(msg)) {
      return; // Não faz nada
    }
    this.router.navigate(['amostra']);
  }

}

