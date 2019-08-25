import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {ITrack} from '../track';

import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent implements OnInit {
  track=[];
  public toptracks;
  public breakpoint=0;

  constructor(private _muzixService:ServiceService) { }

  ngOnInit() {
    this._muzixService.getTopTracks()
    .subscribe(data=> this.toptracks=data);
    
    
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
   }
  save(tracks,i)
  {
    console.log(tracks);
    console.log(i)
    var date = new Date().getTime();
    var finalid = date.toString();
    var idd = finalid.substr(1, 8);
    var demo;
    
       this._muzixService.saveTrack(tracks,idd).subscribe(data=>demo=data);
     console.log("subscribed data:",demo);
  }


}
