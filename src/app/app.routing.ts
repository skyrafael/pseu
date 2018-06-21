import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EquipeComponent} from './equipe/equipe.component';
import {ContatoComponent} from './contato/contato.component';


const routes: Routes = [
    /*pseu*/
    { path: 'home',         component: HomeComponent },
    { path: 'equipe',         component: EquipeComponent },
    { path: 'contato',         component: ContatoComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
