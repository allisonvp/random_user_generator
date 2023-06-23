export interface User {
  gender: string;
  name: {
    first: string;
    last: string;
  };
  email: number;
  dob: {
    age: number;
  };
  picture: {
    large: string;
    medium: string;
  };
  nat: string;
  location: {
    country: string;
  };
  login: {
    uuid: string;
  };
}
export interface DataUsers {
  results: User[];
  info: {
    results: number;
  };
}
