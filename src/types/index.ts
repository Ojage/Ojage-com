export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  bio: string;
  avatar: string;
  birthdate: string;
  location: string;
  contact: {
    email?: string;
    phone?: string;
    social?: {
      facebook?: string;
      instagram?: string;
    };
  };
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'birthday' | 'anniversary' | 'gathering' | 'other';
  attendees: string[];
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  date: string;
  tags: string[];
  uploadedBy: string;
}