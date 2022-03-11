import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public host:string="http://localhost:8080";


  constructor(private httpClient: HttpClient) { }


  public getPays(){
    return this.httpClient.get(this.host+"/pays");
  }
  public getSpays(motCle:string){
    return this.httpClient.get(this.host+"/sPays?mc="+motCle);
  }
}
