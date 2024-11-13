export interface Property {
    id?: number;
    title: string;
    description: string;
    price: number;
    type: 'apartment' | 'house' | 'land';
    location: string;
    latitude: number;
    longitude: number;
    user_id: number;
    images?: string[]; // مسار الصور
  }