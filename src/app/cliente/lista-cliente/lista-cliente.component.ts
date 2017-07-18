import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from 'app/_models/cliente';
import { ToastService } from 'app/toast.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {

  listaCliente :Cliente[] = [];

  constructor(private servico :ClienteService, private toastService: ToastService) {
    this.listar();
  }
  listar(){
    this.servico.lista().subscribe(
      res => this.listaCliente = res
    );
  }
  remover(cliente: Cliente){
    this.servico.remover(cliente).subscribe(
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
