import { Component, OnInit } from '@angular/core';
import { Bier } from '../../models/bier';
import { BierService } from '../../services/bier.service';
import { UploadServices } from '../../services/upload.service';
import { Global } from '../../services/global';
import { Router,ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'app-edit', 
 templateUrl:'../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [BierService,UploadServices]
})
export class EditComponent implements OnInit {

		public title:string;
		public bier:Bier;
		public save_bier;
		public status:string;
		public filesToUpload:Array<File>;
		public url:string;
 

 constructor(
  		private _bierService:BierService,
      	private _uploadServices:UploadServices,
      	private _route:ActivatedRoute
  	) {
  		this.title = "Edit a Bier";
  		this.bier = new Bier('','','','','','','','');
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

  	onSubmit(form){
  		this._bierService.updateBier(this.bier).subscribe(
  			response =>{
  				 if(response.bier){
             
                //image upload
                if(this.filesToUpload){

                	 this._uploadServices.makeFileRequest(Global.url+"upload-image/"+response.bier._id
           ,[],this.filesToUpload,'image').then((result:any)=>{               
                  
                  this.save_bier = result.bier;
                   this.status = 'success';
                  
                });

            }else{
            	this.save_bier = response.bier;
            	this.status = 'success';
            }                    

            }else{
              this.status = 'failed';
            }
  		},

  			error=>{
  				console.log(<any>error);
  			}
  		);
  	}

  	fileChangeEvent(fileInput:any){          
          this.filesToUpload = <Array<File>>fileInput.target.files;/*asi seleccionamos to
          dos los archivos que seleccionamos con el input*/
        }

}
