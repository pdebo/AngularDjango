export class AppConstants {
  public static get baseUrl(): string {return 'http://127.0.0.1:8000';}
  public static get websiteTitle(): string {return 'La vie';}
  public static imageUrl(imageName: string): string {return this.baseUrl + '/media/' + imageName;}
  public static authorimage(authorName: string): string {
    if (authorName === 'Pol Deborsu') {
      return this.imageUrl('Pol.jpg');
    } else {
      return this.imageUrl('Jean-Claude_Wicky_à_La_Neuveville.jpg');
    }
  }
}
