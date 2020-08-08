import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public title:String = ""; 
	public head:String = "";
	public content:String = "";




  constructor() { 
  	this.title = "About this Web";
  	this.head = "Welcome!";		
  	this.content=`This website has been built so that those
  	who enjoy beer can introduce new brands or simply
  	upload their photos related to the extensive and rich world of beer.
  	In the create section, you can upload your image related to a specific brand.
  	Fill in the fields to give us the precise information. Thank you
  	`;  
  }

  ngOnInit(): void {
  }

}
