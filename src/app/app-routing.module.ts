import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'library/:month/:year', component: LibraryComponent},
  {path: 'promise', component: ResetPasswordComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
