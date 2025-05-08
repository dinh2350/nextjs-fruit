export interface IFruit {
  id: number;
  name: string;
  priceRange: number[];
  image: string;
  rating: number;
}

export interface ITeamMember {
  id: number;
  name: string;
  position: string;
  avatar: string;
  socialLinks: ISocialLink[];
}

export interface ISocialLink {
  id: number;
  platform: string;
  link: string;
  imageIconSrc: string;
}
