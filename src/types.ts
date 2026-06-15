export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isSpecial?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export interface ClientLogo {
  name: string;
  logo: string;
}
