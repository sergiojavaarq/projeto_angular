import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { AutenticarComponent } from './components/pages/usuarios/autenticar/autenticar.component';
import { CriarContaComponent } from './components/pages/usuarios/criar-conta/criar-conta.component';
import { RecuperarSenhaComponent } from './components/pages/usuarios/recuperar-senha/recuperar-senha.component';
import { CadastrarProdutosComponent } from './components/pages/produtos/cadastrar-produtos/cadastrar-produtos.component';
import { ConsultarProdutosComponent } from './components/pages/produtos/consultar-produtos/consultar-produtos.component';
import { EditarProdutosComponent } from './components/pages/produtos/editar-produtos/editar-produtos.component';
import { ConsultarCategoriasComponent } from './components/pages/categorias/consultar-categorias/consultar-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutenticarComponent,
    CriarContaComponent,
    RecuperarSenhaComponent,
    CadastrarProdutosComponent,
    ConsultarProdutosComponent,
    EditarProdutosComponent,
    ConsultarCategoriasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
