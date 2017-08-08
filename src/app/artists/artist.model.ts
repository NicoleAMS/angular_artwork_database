export class Artist {
  public firstName: string;
  public lastName: string;
  public birthYear: number;
  public deathYear: number;
  public country: string;
  public image: string; 

  constructor(firstName: string, lastName: string, birthYear: number, deathYear: number, country: string, image: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.deathYear = deathYear;
    this.country = country;
    this.image = image; 
  }
}