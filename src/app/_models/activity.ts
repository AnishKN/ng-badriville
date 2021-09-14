export class Activity {
  key!: string;
  title!: string;
  banner_name!: string;
  location!: string;
  activity_name!: string;
  activity_icon_name!: string;
  image!: File;
  icon: File;

  constructor(title: string, banner_name: string, location: string, image: File, icon: File) {
    this.title = title;
    this.banner_name = banner_name;
    this.location = location;
    this.image = image;
    this.icon = icon;
  }
}