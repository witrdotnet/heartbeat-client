import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PoetHomeComponent } from './poet-home/poet-home.component';

const routes: Routes = [
  { path: 'poet/:poetid', component: PoetHomeComponent },
  { path: 'poem/:poetid/:poemid', component: PoetHomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
