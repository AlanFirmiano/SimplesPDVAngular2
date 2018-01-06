import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {ListaProdutoComponent} from "./lista-produto/lista-produto.component";
import {NovoProdutoComponent} from "./novo-produto/novo-produto.component";

const APP_ROUTES: Routes = [
  {path:"", component:ListaProdutoComponent},
  {path:"adicionar", component:NovoProdutoComponent}
]

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule {

}
