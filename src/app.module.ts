import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticlesModule } from './articles/articles.module';
import { ArticlesService } from './articles/articles.service';

@Module({
  imports: [ArticlesModule],
  controllers: [AppController],
  providers: [ArticlesService],
})
export class AppModule {}
