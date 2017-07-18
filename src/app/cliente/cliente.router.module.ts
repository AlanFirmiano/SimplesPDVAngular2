import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ListaClienteComponent } from 'app/cliente/lista-cliente/lista-cliente.component'
import { NovoClienteComponent } from 'app/cliente/novo-cliente/novo-cliente.component';

const APP_ROUTES: Routes = [
  {path:"", component:ListaClienteComponent},
  {path:"adicionar", component:NovoClienteComponent}
]

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class ClienteRoutingModule {

}
