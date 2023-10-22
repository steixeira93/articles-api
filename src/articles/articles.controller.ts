import { Controller, Get, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from '../DTO/create-articles.dto';
import { Article } from './articles.interface';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }
}