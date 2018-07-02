import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EquipeComponent } from './equipe/equipe.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import { NavbarPseuComponent } from './shared/navbar-pseu/navbar-pseu.component';
import {AgmCoreModule} from '@agm/core';
import { DetalheComponent } from './equipe/detalhe/detalhe.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FuncionaComponent } from './funciona/funciona.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EquipeComponent,
    LoginComponent,
    ContatoComponent,
    CadastroComponent,
    NavbarPseuComponent,
    DetalheComponent,
    FooterComponent,
    FuncionaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
