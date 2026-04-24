export type AchievementImage = {
  url: string;
  alt?: string;
};

export type Achievement = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  description: string;
  contributions: string[];
  date?: string;
  images?: AchievementImage[];
  thumbnail?: AchievementImage;
};