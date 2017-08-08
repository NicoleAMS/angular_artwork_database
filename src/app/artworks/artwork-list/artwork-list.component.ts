import { Component, OnInit } from '@angular/core';
import { Artwork } from '../artwork.model';
import { ArtworkService } from '../artwork.service';

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {
  artworks: Artwork[];

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
    this.artworks = this.artworkService.getArtworks();
  }

}
