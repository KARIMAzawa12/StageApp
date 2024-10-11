import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-stage-details',
  templateUrl: './stage-details.component.html',
  styleUrls: ['./stage-details.component.css']
})
export class StageDetailsComponent {
  stageDetails : any
  id : any
  constructor(private act: ActivatedRoute, private sharedService : ServiceService){}
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id')
    this.sharedService.GetStageById(this.id).subscribe(
      res => {
        console.log(this.id)
        this.stageDetails = res
        console.log("stage details" + this.stageDetails)
      }, 
      err =>{
        console.log(err)
      }
    )
  }
 
}
