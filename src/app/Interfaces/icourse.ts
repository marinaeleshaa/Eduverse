export interface ICourse {
  id?:string,
  name: string;
  description: string;
  imgUrl: string;
  price: number | null;
  rate: number | null;
  hours: number | null;
}
