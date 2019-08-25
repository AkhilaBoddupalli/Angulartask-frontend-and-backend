import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ITrack } from './track';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { searchresult } from './searchresult';
import { Router } from '@angular/router';
import { RootObject } from './last';
import { MatCalendarBody } from '@angular/material';

 

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _url:string="http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=3cc8ac30b3db666f9d334cd898067c20&format=json";
  private serach_url:string="http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=3cc8ac30b3db666f9d334cd898067c20&format=json";
  private database_url:string="http://localhost:8080/api/v1/track";
  public tracks;
  constructor(private http:HttpClient) { }
  
  getTopTracks():Observable<ITrack[]>
  {
    return this.http.get<ITrack[]>(this._url);
  }

searchtrack(track):Observable<ITrack[]>{
  return this.http.get<any>("http://ws.audioscrobbler.com/2.0/?method=track.search&track="+track+"&api_key=3cc8ac30b3db666f9d334cd898067c20&format=json").pipe(map(data => data.results.trackmatches.track));
}
getAllTracks():Observable<ITrack[]>{
  return this.http.get<ITrack[]>(this.database_url);
}
saveTrack(tracks,id): Observable<any> {
      
  const body = new HttpParams()
  .set('id', id)
    .set('name', tracks.name)
    .set('comment', tracks.artist.name);

  return this.http.post(this.database_url,
    body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }
  );
}
savetrack(tracks,id): Observable<any> {
      
  const body = new HttpParams()
  .set('id', id)
    .set('name', tracks.name)
    .set('comment', tracks.artist.name);

  return this.http.post(this.database_url,
    body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }
  );
}
updatetrack(songname,artistname,id): Observable<any> {
      
  const body = new HttpParams()
  .set('id', id)
      .set('name', songname)
    .set('comment',artistname);

    

  return this.http.put(this.database_url+"/"+id,
    body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }
  );
}
deleteTrack(id): Observable<any> {

  return this.http.delete<any>(this.database_url+"/"+id);
} 





   
}
