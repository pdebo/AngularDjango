export class AppConstants {
  public static get baseUrl(): string {return 'http://127.0.0.1:8000';}
  public static get websiteTitle(): string {return 'La vie';}
  public static imageUrl(imageName: string): string {return this.baseUrl + '/media/' + imageName;}
}
