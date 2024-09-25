import mongoose, { Schema } from "mongoose";

import { NewsSchemaType } from "@/types";

const NewsSchema: Schema = new Schema<NewsSchemaType>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: {
      type: String,
      enum: [
        "india",
        "sports",
        "national",
        "political",
        "cricket",
        "world",
        "business",
        "trending",
        "education",
        "environment",
      ],
      required: true,
    },
    keywords: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const IndiaNews =
  mongoose.models.IndiaNews ||
  mongoose.model<NewsSchemaType>("IndiaNews", NewsSchema);
export const SportsNews =
  mongoose.models.SportsNews ||
  mongoose.model<NewsSchemaType>("SportsNews", NewsSchema);
export const NationalNews =
  mongoose.models.NationalNews ||
  mongoose.model<NewsSchemaType>("NationalNews", NewsSchema);
export const PoliticalNews =
  mongoose.models.PoliticalNews ||
  mongoose.model<NewsSchemaType>("PoliticalNews", NewsSchema);
export const CricketNews =
  mongoose.models.CricketNews ||
  mongoose.model<NewsSchemaType>("CricketNews", NewsSchema);
export const WorldNews =
  mongoose.models.WorldNews ||
  mongoose.model<NewsSchemaType>("WorldNews", NewsSchema);
export const BusinessNews =
  mongoose.models.BusinessNews ||
  mongoose.model<NewsSchemaType>("BusinessNews", NewsSchema);
export const TrendingNews =
  mongoose.models.TrendingNews ||
  mongoose.model<NewsSchemaType>("TrendingNews", NewsSchema);
export const EducationNews =
  mongoose.models.EducationNews ||
  mongoose.model<NewsSchemaType>("EducationNews", NewsSchema);
export const EnvironmentNews =
  mongoose.models.EnvironmentNews ||
  mongoose.model<NewsSchemaType>("EnvironmentNews", NewsSchema);

export const getNewsModel = (category: string) => {
  switch (category) {
    case "india":
      return IndiaNews;
    case "sports":
      return SportsNews;
    case "national":
      return NationalNews;
    case "political":
      return PoliticalNews;
    case "cricket":
      return CricketNews;
    case "world":
      return WorldNews;
    case "business":
      return BusinessNews;
    case "trending":
      return TrendingNews;
    case "education":
      return EducationNews;
    case "environment":
      return EnvironmentNews;
    default:
      return null; // Return null if category is invalid
  }
};
