import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenuService } from './menu.service';
import { MenuComponent } from './menu.component';
import { MaterializeModule } from 'angular2-materialize';
import { MenuRoutingModule } from './menu.router.module';
import { ToastService } from 'app/toast.service';
@NgModule({
  imports: [
    CommonModule,
    MaterializeModule,
    FormsModule,
    MenuRoutingModule
  ],
  providers: [MenuService, ToastService],
  declarations: [
    MenuComponent
  ],
  exports: [MenuComponent],
})
export class MenuModule { }
