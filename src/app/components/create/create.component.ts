import { Component, OnInit } from '@angular/core';
//import model and service
import { Bier } from '../../models/bier';
import { BierService } from '../../services/bier.service';
import { UploadServices } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [BierService,UploadServices]
})
export class CreateComponent implements OnInit {

	public title:string;
	public bier:Bier;
  public save_bier;
  public status:string;
  public filesToUpload:Array<File>;
  public url:string;
 


  constructor(
  		private _bierService:BierService,
      private _uploadServices:UploadServices
  	) {
  		this.title = "put a new bier";
  		this.bier = new Bier('','','','','','','','');
      this.url = Global.url;
  	 }

  	 

  ngOnInit() {


  }

		onSubmit(form){
      
        //storing form basic data
        this._bierService.saveBier(this.bier).subscribe(

          response => {
            console.log(response);
            if(response.bier){
             
                //upload the image
                if(this.filesToUpload){

                   this._uploadServices.makeFileRequest(Global.url+"upload-image/"+response.bier._id
           ,[],this.filesToUpload,'image').then((result:any)=>{              
                  
                  this.save_bier = result.bier;
                   this.status = 'success';
                   form.reset(); //make the form fields empty
                });

          }else{

               this.save_bier = response.bier;
                this.status = 'success';
                form.reset(); 
          }
          

             

            }else{
              this.status = 'failed';
            }
          },
          error =>{
           console.log(<any>error);     
          }
          );
  		}


        fileChangeEvent(fileInput:any){          
          this.filesToUpload = <Array<File>>fileInput.target.files;
          /*so select all the files we select with the input*/
        }

}
