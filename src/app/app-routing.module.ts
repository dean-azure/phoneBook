import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppAreaComponent } from './app-area.component';

const routes: Routes = [
  {path: '', component: AppAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
