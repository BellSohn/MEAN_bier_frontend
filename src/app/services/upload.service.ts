import { Injectable } from '@angular/core';
import { Global } from './global';


@Injectable()

/*this service should be imported from create.component.ts*/
export class UploadServices{

	public url:string;

	constructor(){
		this.url = Global.url;
	}

	
  /*this method, allows me to do a classic ajax request,in which we attached a file to upload*/
	makeFileRequest(url:string,params:Array<string>,files:Array<File>,name:string){

		return new Promise(function(resolve,reject){
			
      /*to upload files,we need to simulate a clasic form*/
			var formData:any = new FormData();
			var xhr = new XMLHttpRequest();

				for(var $i=0;$i < files.length; $i++){
					formData.append(name,files[$i],files[$i].name);
				}

				xhr.onreadystatechange = function(){
					if(xhr.readyState == 4){
						if(xhr.status == 200){
							resolve(JSON.parse(xhr.response));
						}else{
							reject(xhr.response);
						}
					}
				}

				xhr.open('POST',url,true);
				xhr.send(formData);
			
		});

	}



}

