import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: '' , pathMatch: 'full', redirectTo: 'main'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
