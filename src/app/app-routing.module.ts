import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './modules/login/login.component';
import { PreorderComponent } from './modules/preorder/preorder.component';
import { RouteGuardService } from './route-guard.service';

 

const routes: Routes = [
  { path: '',
  redirectTo:'/login', pathMatch: 'full'},
  { path: 'login',
  component: LoginComponent,},
  { path: 'preOrder',
  component: PreorderComponent,},
  {
  path: 'dash',
  component: DefaultComponent, canActivate:[RouteGuardService]
  // canActivate: [RouteGuardService], data: {role: '1'}
  // {path: '',component: LoginComponent},
  // {path: 'dashboard',component: DefaultComponent}  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [LoginComponent]
