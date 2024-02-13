export type Brewery = {
  id: string;
  name: string;
  brewery_type: string;
  city: string;
  state: string;
  country: string;
  street: string;
  phone: string;
  website: string;
  address_1: string;
  longitude: string;
  latitude: string;
};

export type MapPosition = {
  lat: number;
  lng: number;
};

export type SearchElement = {
  urlSuffix: string;
};
export type ContactInfo = {
  name: string;
  phoneNumber: string;
  email: string;
  question: string;
};
