import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITrack } from './track';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
  private _url:string="http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=3cc8ac30b3db666f9d334cd898067c20&format=json";
  
  constructor(private http:HttpClient) { }
  search(queryString: string) {
    let _URL = this._url + queryString;
    return this.http.get(_URL);
}
}

