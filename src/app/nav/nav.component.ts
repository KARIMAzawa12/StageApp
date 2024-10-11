import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [  './nav.component.css'
  ]
})
export class NavComponent {
  constructor( private sharedService : ServiceService){}
    isfirstTime = this.sharedService.isfirstTime
    
}
