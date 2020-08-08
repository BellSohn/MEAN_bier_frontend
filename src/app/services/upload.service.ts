import { Injectable } from '@angular/core';
import { Global } from './global';


@Injectable()
/*este servicio hay que importarlo desde el create.component.ts*/
export class UploadServices{

	public url:string;

	constructor(){
		this.url = Global.url;
	}

	/*este método,me permite hacer una peticion ajax clásica,en la que 
	adjuntamos un archivo para subir*/
	makeFileRequest(url:string,params:Array<string>,files:Array<File>,name:string){

		return new Promise(function(resolve,reject){

			/*para subir archivos,necesitamos simular un formulario clásico*/
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

	}//end makeFileRequest



}

