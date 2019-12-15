import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquipamentoListComponent } from './equipamento/equipamento-list/equipamento-list.component';
import { EquipamentoFormComponent } from './equipamento/equipamento-form/equipamento-form.component';
import { AmostraListComponent } from './amostra/amostra-list/amostra-list.component';
import { AmostraFormComponent } from './amostra/amostra-form/amostra-form.component';
import { PadraoListComponent } from './padrao/padrao-list/padrao-list.component';
import { PadraoFormComponent } from './padrao/padrao-form/padrao-form.component';

const routes: Routes = [
  
  {
    path: 'equipamento',
    component: EquipamentoListComponent
  },
  {
    path: 'equipamento/novo',
    component: EquipamentoFormComponent
  },
  {
    path: 'equipamento/:id',
    component: EquipamentoFormComponent
  },
  
  {
    path: 'amostra',
    component: AmostraListComponent
  },
  {
    path: 'amostra/nova',
    component: AmostraFormComponent
  },
  {
    path: 'amostra/:id',
    component: AmostraFormComponent
  },
  
  {
    path: 'padrao',
    component: PadraoListComponent
  },
  {
    path: 'padrao/novo',
    component: PadraoFormComponent
  },
  {
    path: 'padrao/:id',
    component: PadraoFormComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
