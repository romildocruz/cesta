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


@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    EditorProdutoComponent,
    MaskDirective,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
