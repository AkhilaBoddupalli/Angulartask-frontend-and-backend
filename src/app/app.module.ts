import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { LogocomponentComponent } from './header/logocomponent/logocomponent.component';
import { SearchbarComponent } from './header/searchbar/searchbar.component';
import { AddtrackComponent } from './header/addtrack/addtrack.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { MatFormFieldModule,MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { ServiceService } from './service.service';
import {SearchserviceService} from './searchservice.service';
// import { ResultsearchComponent } from './resultsearch/resultsearch.component';
// import { PlaylistComponent } from './playlist/playlist.component';
import {routingComponents} from './app-routing.module';
import { SavetrackComponent } from './savetrack/savetrack.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
    SearchbarComponent,
    AddtrackComponent,
    CardcomponentComponent,
    FooterComponent,
    routingComponents,
    SavetrackComponent
    // ResultsearchComponent,
    // PlaylistComponent,
    //ServiceComponent,
   
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule, 
    FlexLayoutModule,
    HttpClientModule,MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,

   // Component
  
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
