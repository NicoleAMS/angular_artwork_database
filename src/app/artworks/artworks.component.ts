import { Component, OnInit } from '@angular/core';
import { ArtworkService } from './artwork.service';
import { Artwork } from './artwork.model';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css'],
  providers: [ArtworkService]
})
export class ArtworksComponent implements OnInit {
  selectedArtwork: Artwork;

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.artworkService.artworkSelected.subscribe(
      (artwork: Artwork) => {
        this.selectedArtwork = artwork;
      }
    )
  }

}
