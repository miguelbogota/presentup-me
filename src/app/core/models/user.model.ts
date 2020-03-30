// Logged user
export interface IUser {
  email: string;
  name: string;

  uid: string;
  password: string;
  recoveryEmail?: string;
  phone?: number;
  birth: Date;
  gender: string;

  title?: string;
  img: string;
  descriptions: string[];
  settings: {
    design: string;
    subscription: string;
  };

}

// Annonimous user
export interface IAnonymousUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
}
