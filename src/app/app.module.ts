import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { ArtworkListComponent } from './artworks/artwork-list/artwork-list.component';
import { ArtworkDetailComponent } from './artworks/artwork-detail/artwork-detail.component';
import { ArtworkItemComponent } from './artworks/artwork-list/artwork-item/artwork-item.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistListComponent } from './artists/artist-list/artist-list.component';
import { ArtistComponent } from './artists/artist-list/artist/artist.component';
import { ArtistDetailComponent } from './artists/artist-detail/artist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArtworksComponent,
    ArtworkListComponent,
    ArtworkDetailComponent,
    ArtworkItemComponent,
    ArtistsComponent,
    ArtistListComponent,
    ArtistComponent,
    ArtistDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
