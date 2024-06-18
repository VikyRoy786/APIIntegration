import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessionService {

  private Url = "http://localhost:3000/missions";
  constructor( private missionClient : HttpClient) { }


  getMissions(){
    return this.missionClient.get(this.Url);
  }
  removeMission(id:number):any{
    console.log(this.Url+ '/'+id)
    return this.missionClient.delete(this.Url+ '/'+id)
  }
}
