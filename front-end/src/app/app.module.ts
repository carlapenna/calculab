import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

// Datas em português no MatDatepicker:
// Instalar os pacotes: yarn add @angular/material-moment-adapter moment
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Acrescentar a linha abaixo 
import { MaterialModule } from './material/material.module';
import { CabecComponent } from './ui/cabec/cabec.component';
import { MenuPrincipalComponent } from './ui/menu-principal/menu-principal.component';
import { RodapeComponent } from './ui/rodape/rodape.component';
// Adicionei (Para injeção de dependência)
import { HttpClientModule } from '@angular/common/http';
import { AmostraListComponent } from './amostra/amostra-list/amostra-list.component';
import { AmostraFormComponent } from './amostra/amostra-form/amostra-form.component';
import { PadraoListComponent } from './padrao/padrao-list/padrao-list.component';
import { PadraoFormComponent } from './padrao/padrao-form/padrao-form.component';
import { EquipamentoListComponent } from './equipamento/equipamento-list/equipamento-list.component';
import { EquipamentoFormComponent } from './equipamento/equipamento-form/equipamento-form.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CabecComponent,
    MenuPrincipalComponent,
    RodapeComponent,
    AmostraListComponent,
    AmostraFormComponent,
    PadraoListComponent,
    PadraoFormComponent,
    EquipamentoListComponent,
    EquipamentoFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Acrescentar a linha abaixo e uma vírgula no final da linha acima
    MatButtonModule,
    MaterialModule,
    // Datas em português no MatDatepicker:
    MatMomentDateModule
  ],
  providers: [
    /**** Datas em português no MatDatepicker  ****/
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
    /**********************************************/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }