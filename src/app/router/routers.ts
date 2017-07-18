import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {path:'', redirectTo:'/menu', pathMatch:"full"},
  {path:'menu', loadChildren: 'app/menu/menu.module#MenuModule'},
  {path:'cliente', loadChildren:'app/cliente/cliente.module#ClienteModule'}

]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
