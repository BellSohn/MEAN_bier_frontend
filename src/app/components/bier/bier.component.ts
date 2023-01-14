import { Component, OnInit } from '@angular/core';
import { Bier } from '../../models/bier';
import { BierService } from '../../services/bier.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-bier',
  templateUrl: './bier.component.html',
  styleUrls: ['./bier.component.css'],
  providers:[BierService]
})
export class BierComponent implements OnInit {

	public biers:Bier[];
  public url:string;


  constructor(
  	private _bierService:BierService
  	) {
    this.url = Global.url;
     }

  ngOnInit(){
  	this.getBiers();
  }

  getBiers(){

  	this._bierService.getBiers().subscribe(
  		response =>{  			
  			if(response.biers){
  				this.biers = response.biers;
  			}
  			
  		},
  		error => {
  			console.log(<any>error);
  		}
  		);
  }

}
