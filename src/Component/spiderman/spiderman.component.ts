import { Component, OnInit } from '@angular/core';
import { MessionService } from '../../service/mession.service';

@Component({
  selector: 'app-spiderman',
  standalone: true,
  imports: [],
  templateUrl: './spiderman.component.html',
  styleUrl: './spiderman.component.css'
})
export class SpidermanComponent implements OnInit {
getId(arg:any) :any{
return arg
}
  missions : any = {id:'', desc :''}
  constructor(private missionService : MessionService) {
    
  }
  ngOnInit():void{
    this.missionService.getMissions().subscribe((data) =>{
      this.missions = data;
    });
    this.missionService.dataAdded().subscribe((data)=>this.missionService.getMissions().subscribe((data) =>{
      this.missions = data;
    }))
  }
  onRemove(id : number){
    this.missionService.removeMission(id).subscribe(()=>this.missionService.getMissions().subscribe((data:any)=>this.missions = data))
  }
}
