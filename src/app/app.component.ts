import { Component } from '@angular/core';
import { AppService } from './app.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimplesPDV';
  data = new Date();
  lista = [];

  constructor(private service: AppService){}


}
