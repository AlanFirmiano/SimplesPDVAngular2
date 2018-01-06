import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private servico:ProdutoService, private rota:Router) {}

  ngOnInit() {
  }

}
