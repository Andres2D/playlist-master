export interface User {
  _id: string;
  email: string;
  userName: string;
  image: string;
};

export interface Access {
  _id?: string;
  email: string;
  accessGranted?: boolean;
};
