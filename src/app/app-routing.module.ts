import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './_components/coming-soon/coming-soon.component';
import { HomeComponent } from './_components/home/home.component';
import { PagesComponent } from './_components/pages/pages.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'coming-soon', component: ComingSoonComponent },
  {
    path: '',
    component: PagesComponent,
    loadChildren: () => import(`./_modules/user.module`).then(m => m.UserModule)
  },
  {
    path: '**', redirectTo: 'home'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
