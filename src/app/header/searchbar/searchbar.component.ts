import { Component, OnInit } from '@angular/core';

 import {FormControl} from '@angular/forms';
//  import { ServiceService } from '../service.service';
//  import {ITrack} from '../track';

 import { Router } from '@angular/router';
import { ITrack } from 'src/app/track';
import { ServiceService } from 'src/app/service.service';
 

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit 
{
  trackname:string;
  results: any[] = [];
  queryField: FormControl = new FormControl();
  constructor(private trackService : ServiceService, private router : Router) { }

   ngOnInit() {
    this.queryField.valueChanges
    .subscribe( result => console.log(result));}


  search():any
  {
    console.log(this.trackname);
    this.router.navigate(['/searchString',this.trackname]);
  }
  }
  


