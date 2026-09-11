import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mfarhanfarmanda.my.id",
      lastModified: new Date(),
    },
  ];
}