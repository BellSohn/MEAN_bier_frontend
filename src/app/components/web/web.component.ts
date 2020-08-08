import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

titulo:String; 
frontend:string;
backend:string;

  constructor() {
  	this.titulo = "This is a little web site that was built with the following technologies"
  	this.backend = 'NodeJS';
  	this.frontend = 'Angular, HTML, CSS';

   }

  ngOnInit(): void {
  }

}
