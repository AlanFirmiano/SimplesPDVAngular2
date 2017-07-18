import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu.component';
const APP_ROUTES: Routes = [
  {path:"", component:MenuComponent}
]

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class MenuRoutingModule {

}
