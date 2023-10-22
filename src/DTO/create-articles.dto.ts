export class CreateArticleDto {
  id: number;
  title: string;
  author: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}