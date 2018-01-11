import {Injectable } from '@angular/core';
import {Http , Headers, RequestOptions,URLSearchParams , Response } from '@angular/http';
import {Router} from '@angular/router';


@Injectable()
export class awsService{

    public serverurl = 'http://localhost:7777/'
    headers=new Headers({'Content-Type': 'application/json'});        
    options;

    constructor(private http : Http ,private router:Router){
        this.setOptions();
    }

    

    getSignedUrl (fileInfo) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('file-name', fileInfo.name);
        params.set('file-type', fileInfo.type);

        this.options.search = params;

        return this.http.get(this.serverurl+'api/aws/sign',this.options )
        .map((response: Response) => 
            response.json()     
        );
    }


    getFileSignedUrl (name) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('fileName', name);
        this.options.search = params;

        return this.http.get(this.serverurl+'api/aws/getFile',this.options )
        .map((response:Response)=>{
            let result=response.json();
            return (result.response);
        });
        ;
    }


    uploadFile(file, presignedUrl){
        let params: URLSearchParams = new URLSearchParams();
        params.set('file', file);
        params.set('url', presignedUrl);
        this.options.search = params;

        const headers = new Headers({'Content-Type': file.type});
        const options = new RequestOptions({ headers: headers });

        return this.http.put(presignedUrl, file, options); 
              
    }


    deleteFileAWS (name) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('fileName', name);
        this.options.search = params;

        return this.http.delete(this.serverurl+'api/aws/delete',this.options )
        .map((response:Response)=>{
            response.json();
        });
        ;
    }

    setOptions(){
        this.options = new RequestOptions({ headers: this.headers });
        this.options.headers.append('x-access-token',sessionStorage.getItem('token'));
    }

}