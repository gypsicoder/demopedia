export type Theme = 'dark' | 'light';

export type BlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export interface IPortfolioItem {
  id: number;
  title: string;
  desc: string;
  image: string;
}
