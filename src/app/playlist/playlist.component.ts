import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  public tracks=[];
  public songname='';
  public artistname='';
  public editid='';
  

  public showform=false;
public track=[];
  public breakpoint=0;
  name: any;
  // public artist: string;
  // public mbid1: string;
  // public track: string;
  constructor(private muzixService : ServiceService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.muzixService.getAllTracks().subscribe(data => this.tracks = data);
    console.log(this.tracks);
  }
  removetrack(track){
    var succes='false'
  console.log(track.id)
  this.muzixService.deleteTrack(track.id).subscribe((data)=>{
     succes = 'true';
      console.log("success");
    
  });
  
  }
  updatetrack(track){
  
    console.log(track)
    this.songname = track.name;
    this.artistname=track.artistname;
    this.editid = track.id;
    this.showform=true;
  }

update(){
      console.log(this.songname,this.artistname,this.editid) 
        this.showform=false;
        this.muzixService.updatetrack(this.songname,this.artistname,this.editid).subscribe((data)=>{
          console.log('updated');
        })
   
 
}
}

