import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { AlbumsDetailsComponent } from './albums-details/albums-details.component';
import { AlbumsDescriptionComponent } from './albums-description/albums-description.component';
import { ChronometreComponent } from './chronometre/chronometre.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    LoginComponent,
    SearchComponent,
    AudioPlayerComponent,
    AlbumsDetailsComponent,
    AlbumsDescriptionComponent,
    ChronometreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
