import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist.model';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = [
    new Artist(
      "Vincent", "Van Gogh", 1853, 1890, "The Netherlands",
      "https://www.biography.com/.image/c_limit%2Ccs_srgb%2Cq_80%2Cw_850/MTM3NTk5NTA2NTk3MjkxMjQ4/vincent_van_gogh_age_19_by-jacobus-marinus-wilhelmus-jmw-de-louw-1823-1907-public-domain-via-wikimedia-commonsjpg.jpg"
    ),
    new Artist(
      "Claude", "Monet", 1840, 1926, "France", 
      "https://www.biography.com/.image/c_limit%2Ccs_srgb%2Cq_80%2Cw_402/MTIwNjA4NjMzOTE3NzY5MjI4/claude-monet-wc-9411771-2-402.jpg"
    ),
    new Artist(
      "Paul", "Cézanne", 1839, 1906, "France",
      "https://www.biography.com/.image/c_limit%2Ccs_srgb%2Cq_80%2Cw_960/MTE5NDg0MDU1MTc1NDY0NDYz/paul-cezanne-9542036-2-raw.jpg"
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
