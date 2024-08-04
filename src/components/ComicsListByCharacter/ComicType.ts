export type ComicType = {
  description: string;
  id: number;
  digitalId: number;
  isbn: string;
  issueNumber: number;
  modified: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  title: string;
  upc: string;
  variantDescription: string;
};
