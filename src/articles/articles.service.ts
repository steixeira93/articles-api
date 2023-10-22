import { Injectable } from '@nestjs/common';
import { Article } from './articles.interface';
import { CreateArticleDto } from '../DTO/create-articles.dto';

@Injectable()
export class ArticlesService {
  private readonly articles: Article[] = [];

  create(article: CreateArticleDto): Article {
    const newArticle = {
      id: this.articles.length + 1,
      ...article,
    };
    this.articles.push(newArticle);
    return newArticle;
  }

  findAll(): Article[] {
    return this.articles;
  }
}