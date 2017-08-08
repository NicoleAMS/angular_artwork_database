import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../../artist.model';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @Input() artist: Artist; 
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
