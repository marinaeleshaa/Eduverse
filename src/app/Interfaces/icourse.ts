export interface ICourse {
  id:string,
  name: string;
  description: string;
  imgUrl: string;
  price: number | null;
  rate: number | null;
  hours: number | null;
  category: string;
  outline: { title: string; subtitle: string }[];
  conclusion: string[];
}
