export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  isPopular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
}