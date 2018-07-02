import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.scss']
})
export class DetalheComponent implements OnInit {

  data : Date = new Date();

  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('contact-us ');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('bg-info');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('contact-us');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('bg-info');
    navbar.classList.add('navbar-transparent');

  }

}
