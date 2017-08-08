import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { ArtworkDetailComponent } from './artworks/artwork-detail/artwork-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/artworks', pathMatch: 'full' },
  { path: 'artworks', component: ArtworksComponent, children: [
    { path: ':id', component: ArtworkDetailComponent }
  ]},
  { path: 'artists', component: ArtistsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}