import { Component, OnInit } from '@angular/core';
import { ToastService } from 'app/toast.service';
import {Produto} from '../../_models/produto';
import {ProdutoService} from '../produto.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {
  produto: Produto = new Produto();
  constructor(private servico : ProdutoService, private toastService: ToastService) {}

  save(){
    this.servico.salvar(this.produto).subscribe(
      res => this.toastService.toast(res,"green pulse"),

      err => this.toastService.toast(err,"red pulse")
  );

  }

  ngOnInit() {
  }

}
