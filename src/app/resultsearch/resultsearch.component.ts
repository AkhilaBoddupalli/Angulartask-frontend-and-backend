import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiceService } from '../service.service';
import { ITrack } from '../track';

@Component({
  selector: 'app-resultsearch',
  templateUrl: './resultsearch.component.html',
  styleUrls: ['./resultsearch.component.css']
})
export class ResultsearchComponent {

  tracks;
  result;
  public trackname;
  constructor(private muzixService: ServiceService, private route: ActivatedRoute) {  
     
  }


  ngOnInit() {
    this.trackname = this.route.snapshot.paramMap.get('trackname');
    console.log('IN LAST FM :' + this.trackname);
    this.tracks = this.muzixService.searchtrack(this.trackname).subscribe(
      data => { this.tracks = data });
      // this.tracks = this.result.results.trackmatches.track;

  }
  save(track,i)
  {
    console.log(track);
    console.log(i)
    var date = new Date().getTime();
    var finalid = date.toString();
    var idd = finalid.substr(1, 8);
    var demo;
    
       this.muzixService.savetrack(track,idd).subscribe(data=>demo=data);
     console.log("subscribed data:",demo);
  }
}


