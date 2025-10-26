export interface ICourse {
  _id:string,
  courseName: string;
  description: string;
  courseCover: string;
  price: number | null;
  rate: number | null;
  hours: number | null;
  category: string;
  targetAudience: string;
  outline: { title: string; subtitle: string }[];
  conclusion: string[];
}
