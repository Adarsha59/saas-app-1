// types.ts
export interface FormField {
  label: string;
  field: string;
  name: string;
  required: boolean;
}

export interface Post {
  id: number;
  name: string;
  description: string;
  category: string;
  icons: string;
  aiPrompts: string;
  image: string;
  slug: string;
  form: FormField[];
}
