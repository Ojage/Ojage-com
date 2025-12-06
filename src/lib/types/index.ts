export interface Language {
  id: string;
  name: string;
  nativeName: string;
  code: string;
  region: string;
  speakers: number;
  status: 'covered' | 'in-progress' | 'planned';
  resources: {
    dataset: boolean;
    model: boolean;
    tts: boolean;
  };
}

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  pdfUrl?: string;
  arxivId?: string;
  abstract: string;
  tags: string[];
}

export interface Dataset {
  id: string;
  name: string;
  description: string;
  language: string;
  size: string;
  license: string;
  downloadUrl: string;
  huggingFaceUrl?: string;
  stats: {
    sentences: number;
    words: number;
    speakers: number;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl?: string;
}

export interface Contributor {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  contributions: number;
  languages: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'meeting' | 'workshop' | 'conference' | 'hackathon';
  location: string;
  url?: string;
}

