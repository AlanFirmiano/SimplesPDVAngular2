import { Component, OnInit } from '@angular/core';
import { ProdutoService} from '../produto.service';
import { ToastService } from 'app/toast.service';
import {Produto} from "../../_models/produto";

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  listaProduto : Produto[] = [];

  constructor(private servico: ProdutoService, private toastService: ToastService) {
    this.listar();
  }
  listar(){
    this.servico.lista().subscribe(
      res => this.listaProduto = res
    );
  }
  remover(produto: Produto){
    this.servico.remover(produto).subscribe(
      res => {
        this.toastService.toast(res,"green pulse");
        this.listar();
      },
      err => this.toastService.toast(err,"red pulse")
  );

  }
  ngOnInit() {

  }

}
