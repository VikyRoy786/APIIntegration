import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessionService } from '../../service/mession.service';

@Component({
  selector: 'app-ironman',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ironman.component.html',
  styleUrl: './ironman.component.css'
})
export class IronmanComponent {
  mission: any = {id:'', desc :''}
  constructor(private missionService : MessionService) {
  }
  Addmission(): void {
    this.missionService.addMission(this.mission).subscribe((data :any)=>{console.log("added", data)});
    this.mission=''
  }

}
