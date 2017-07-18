import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private servico:ClienteService, private rota:Router) {}

  ngOnInit() {
  }

}
