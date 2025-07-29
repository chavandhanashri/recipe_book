export interface Recipe {
  category: string;
  id?: number;
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  imageUrl: string;
}