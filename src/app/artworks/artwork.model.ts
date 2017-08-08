export class Artwork {
  public title: string;
  public date: string;
  public description: string;
  public image: string; 

  constructor(title: string, date: string, description: string, image: string) {
    this.title = title;
    this.date = date;
    this.description = description;
    this.image = image; 
  }
}