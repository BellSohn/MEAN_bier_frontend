import { Component, OnInit } from '@angular/core';
import { Bier } from '../../models/bier';
import { BierService } from '../../services/bier.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[BierService]
})

export class DetailComponent implements OnInit {

	public bierId:string;
	public url:string;
	public bier:Bier;



  constructor(
  		private _bierService:BierService,
  		private _router:Router,
  		private _route:ActivatedRoute
  	) {
  		this.url = Global.url;
  	 }

  ngOnInit(){
  		this._route.params.subscribe(params =>{
  			let id = params.id;

        this.getBier(id);
  		});
  }


  	getBier(id){

  		this._bierService.getBier(id).subscribe(
  			response => {
  				this.bier = response.bier;
  				console.log(response.bier);
  			},
  			error => {
  				console.log(<any>error);
  			}
  		);
  	}




}
