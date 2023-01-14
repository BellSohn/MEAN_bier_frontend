import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bier } from '../models/bier';
import { Global } from './global';

@Injectable()

export class BierService{
	/*here we keep the api url*/
	public url:string;
	



	constructor(
		private _http:HttpClient
		){
			this.url = Global.url;
		}


		testService(){
			return "Probando el servicio de Angular";
		}


		saveBier(bier:Bier):Observable<any>{

			let params = JSON.stringify(bier);
			let headers = new HttpHeaders().set('Content-Type','application/json');

			return this._http.post(this.url+'save-bier',params,{headers:headers});

		}

		getBiers():Observable<any>{

			let headers = new HttpHeaders().set('Content-Type','application/json');

			return this._http.get(this.url+'/biers',{headers:headers});

		}


		getBier(id):Observable<any>{

			let headers = new HttpHeaders().set('Content-Type','application/json');

			return this._http.get(this.url+'/bier/'+id,{headers:headers});
		}


		updateBier(bier):Observable<any>{
			let params = JSON.stringify(bier);
				let headers = new HttpHeaders().set('Content-Type','application/json');

				return this._http.put(this.url+'/bier-update/'+bier._id,params,{headers:headers});
				

		}




}
