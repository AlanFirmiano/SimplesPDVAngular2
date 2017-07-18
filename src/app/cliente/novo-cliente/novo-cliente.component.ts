import { Component, OnInit } from '@angular/core';
import { Cliente } from 'app/_models/cliente';
import { ClienteService } from 'app/cliente/cliente.service';
import { ToastService } from 'app/toast.service';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  constructor(private servico : ClienteService, private toastService:ToastService) {}

  save(){
    this.servico.salvar(this.cliente).subscribe(
      res => this.toastService.toast(res,"green pulse"),

      err => this.toastService.toast(err,"red pulse")
  );

  }

  ngOnInit() {
  }

}
