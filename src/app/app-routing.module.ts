import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
