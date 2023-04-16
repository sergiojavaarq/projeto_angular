import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AutenticarComponent } from "./components/pages/usuarios/autenticar/autenticar.component";
import { CriarContaComponent } from "./components/pages/usuarios/criar-conta/criar-conta.component";
import { RecuperarSenhaComponent } from "./components/pages/usuarios/recuperar-senha/recuperar-senha.component";
import { CadastrarProdutosComponent } from "./components/pages/produtos/cadastrar-produtos/cadastrar-produtos.component";
import { ConsultarProdutosComponent } from "./components/pages/produtos/consultar-produtos/consultar-produtos.component";
import { EditarProdutosComponent } from "./components/pages/produtos/editar-produtos/editar-produtos.component";
import { ConsultarCategoriasComponent } from "./components/pages/categorias/consultar-categorias/consultar-categorias.component";
//mapeamento de rotas
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'autenticar' },
    { path: 'autenticar', component: AutenticarComponent },
    { path: 'criar-conta', component: CriarContaComponent },
    { path: 'recuperar-senha', component: RecuperarSenhaComponent },
    { path: 'cadastrar-produtos', component: CadastrarProdutosComponent },
    { path: 'consultar-produtos', component: ConsultarProdutosComponent },
    { path: 'editar-produtos/:id', component: EditarProdutosComponent },
    { path: 'consultar-categorias', component: ConsultarCategoriasComponent }
];

//registrando as rotas
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }