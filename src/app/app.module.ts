import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/routers';
import { MaterializeModule } from 'angular2-materialize';
import { ClienteModule } from './cliente/cliente.module';
import { ProdutoModule } from './produto/produto.module';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MenuModule,
    ClienteModule,
    ProdutoModule,
    LoginModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
