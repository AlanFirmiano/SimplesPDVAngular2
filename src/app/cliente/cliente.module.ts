import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClienteService } from './cliente.service';
import { ClienteComponent } from './cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { NovoClienteComponent } from './novo-cliente/novo-cliente.component';
import { MaterializeModule } from 'angular2-materialize';
import { ClienteRoutingModule } from './cliente.router.module';
import { ToastService } from 'app/toast.service';
@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    ClienteRoutingModule
  ],
  providers: [ClienteService, ToastService],
  declarations: [
    ClienteComponent,
    ListaClienteComponent,
    NovoClienteComponent
  ],
  exports: [ClienteComponent,ListaClienteComponent,NovoClienteComponent],
})
export class ClienteModule { }
