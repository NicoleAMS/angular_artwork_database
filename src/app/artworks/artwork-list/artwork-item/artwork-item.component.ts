import { Component, OnInit, Input } from '@angular/core';
import { ArtworkService } from '../../artwork.service';

import { Artwork } from '../../artwork.model';

@Component({
  selector: 'app-artwork-item',
  templateUrl: './artwork-item.component.html',
  styleUrls: ['./artwork-item.component.css']
})
export class ArtworkItemComponent implements OnInit {
  @Input() artwork: Artwork; 
  @Input() index: number;

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
  }

  onSelected() {
    console.log(this.artwork);
    this.artworkService.artworkSelected.emit(this.artwork);
  }

}
