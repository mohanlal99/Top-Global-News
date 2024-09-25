import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type CategoryType =
  | "india"
  | "sports"
  | "national"
  | "political"
  | "cricket"
  | "world"
  | "business"
  | "trending"
  | "education"
  | "environment";

// Interface for NewsSchema
export interface NewsSchemaType {
  _id: string;
  title: string;
  content: string;
  category: CategoryType;
  keywords: string;
  author: string;
  createdAt?: Date;
  updatedAt?: Date;
  imageUrl: string;
  slug: string;
}

export interface NewsApiResponse {
  news: NewsSchemaType[];
}

export interface Params {
  category: CategoryType;
  slug: string;
}
