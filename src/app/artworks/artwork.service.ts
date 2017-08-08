import { EventEmitter } from '@angular/core';
import { Artwork } from './artwork.model';

export class ArtworkService {
  artworkSelected = new EventEmitter<Artwork>();

  private artworks: Artwork[] = [
    new Artwork(
      "The Starry Night", 
      "1889", 
      "The Starry Night is an oil on canvas by the Dutch post-impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an idealized village.[1][2][3] It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. It is regarded as among Van Gogh's finest works, and is one of the most recognized paintings in the history of Western culture.",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
    ),
    new Artwork(
      "Impression, Sunrise",
      "1872",
      "Impression, Sunrise depicts the port of Le Havre at sunrise, the two small rowboats in the foreground and the red sun being the focal elements. In the middle ground, more fishing boats are included, while in the background on the left side of the painting are clipper ships with tall masts. Behind them are other misty shapes that 'are not trees but smoke stacks of packboats and steamships, while on the right in the distance are other masts and chimneys silhouetted against the sky.' In order to show these features of industry, Monet eliminated existing houses on the left side of the jetty, leaving the background unobscured.",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg"
    )
  ];

  getArtworks() {
    return this.artworks.slice();
  }

  getArtwork(id: number) {
    return this.artworks[id];
  }
}