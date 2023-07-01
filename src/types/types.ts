export type Theme = 'dark' | 'light';

export interface IPortfolioItem {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IPost {
  _id: string;
  title: string;
  desc: string;
  image: string;
  content: string;
  username: string;
}
