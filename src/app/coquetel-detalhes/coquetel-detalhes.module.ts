import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoquetelDetalhesPageRoutingModule } from './coquetel-detalhes-routing.module';

import { CoquetelDetalhesPage } from './coquetel-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoquetelDetalhesPageRoutingModule
  ],
  declarations: [CoquetelDetalhesPage]
})
export class CoquetelDetalhesPageModule {}
