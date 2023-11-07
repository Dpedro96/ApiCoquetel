import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoquetelDetalhesPage } from './coquetel-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: CoquetelDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoquetelDetalhesPageRoutingModule {}
