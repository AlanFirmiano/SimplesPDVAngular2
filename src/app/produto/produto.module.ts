import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProdutoService } from './produto.service';
import { ProdutoComponent } from './produto.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { MaterializeModule } from 'angular2-materialize';
import { ProdutoRoutingModule } from './produto.router.module';
import { ToastService } from 'app/toast.service';
@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    ProdutoRoutingModule
  ],
  providers: [ProdutoService, ToastService],
  declarations: [
    ProdutoComponent,
    ListaProdutoComponent,
    NovoProdutoComponent
  ],
  exports: [ProdutoComponent, ListaProdutoComponent, NovoProdutoComponent],
})
export class ProdutoModule { }
