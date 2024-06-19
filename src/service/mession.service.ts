import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessionService {
  private updateMissions = new Subject<any[]>();
  observableupdateMissions = this.updateMissions.asObservable();
  private Url = "http://localhost:3000/missions";
  constructor( private missionClient : HttpClient) { }


  getMissions(){
    return this.missionClient.get(this.Url);
  }
  removeMission(id:number):any{
    console.log(this.Url+ '/'+id)
    return this.missionClient.delete(this.Url+ '/'+id)
  }
  addMission(data:any):any{
    console.log("Addmission");
    return  this.missionClient.post(this.Url,data).pipe(map( x =>this.updateMissions.next(data)));

  }
  dataAdded(){
    return this.updateMissions.asObservable();
  }
}
