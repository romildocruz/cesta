import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoListComponent } from './pages/produto/produto-list/produto-list.component';
import { EditorProdutoComponent } from './pages/produto/editor-produto/editor-produto.component';
import { MaskDirective } from './directives/mask.directive';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MasterComponent } from './pages/master/master.component';
import { ReportComponent } from './pages/report/report.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ManagerGuard } from './guards/manager.guard';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    EditorProdutoComponent,
    MaskDirective,
    LoadingComponent,
    LoginComponent,
    HomeComponent,
    MasterComponent,
    ReportComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticatedGuard,
    ManagerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
