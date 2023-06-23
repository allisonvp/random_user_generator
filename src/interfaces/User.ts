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
    state: string;
    city: string;
  };
  login: {
    uuid: string;
    username: string;
  };
}
export interface DataUsers {
  results: User[];
  info: {
    results: number;
  };
}
