import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardcomponentComponent} from './cardcomponent/cardcomponent.component'
import { ResultsearchComponent } from './resultsearch/resultsearch.component';
import { PlaylistComponent } from './playlist/playlist.component';



const routes: Routes = [
  { path: 'searchString/:trackname', component: ResultsearchComponent},
  { path: 'playlist', component: PlaylistComponent},
  {
    path:'home',component:CardcomponentComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  PlaylistComponent,
  ResultsearchComponent,
  CardcomponentComponent
]