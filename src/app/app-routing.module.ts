import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './pages/master/master.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportComponent } from './pages/report/report.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ManagerGuard } from './guards/manager.guard';
import { SignupComponent } from './pages/signup/signup.component';
import { ProdutoListComponent } from './pages/produto/produto-list/produto-list.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: 'produtoList', component: ProdutoListComponent },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    component: MasterComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'reports',
        component: ReportComponent,
        canActivate: [ManagerGuard]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
