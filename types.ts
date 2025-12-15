export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

export interface SocialItem {
  name: string;
  url: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  avatar: string;
  description: string;
  status: string;
  statusTime: string;
  socials: SocialItem[];
  works: WorkItem[];
}