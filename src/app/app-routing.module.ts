import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PcDetailsComponent } from './components/pc-details/pc-details.component';
import { PcAddComponent } from './components/pc-add/pc-add.component';
import { PcEditComponent } from './components/pc-edit/pc-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'pc/add', component: PcAddComponent },
  { path: 'pc/:id', component: PcDetailsComponent },
  { path: 'pc/edition/:id', component: PcEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
