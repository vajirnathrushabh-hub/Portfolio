export interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  coverImage: string;
  likes: number;
  comments: {
    user: string;
    text: string;
    time: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: 'social' | 'web' | 'marketing' | 'all';
  description: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  link?: string;
  results?: {
    label: string;
    value: string;
  }[];
}

export interface InstagramPost {
  id: string;
  caption: string;
  image: string;
  likes: number;
  comments: number;
  timestamp: string;
  type: 'image' | 'video' | 'carousel';
  commentsList?: {
    username: string;
    text: string;
    time: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}
