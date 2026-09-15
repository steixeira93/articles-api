import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticlesModule } from './articles/articles.module';
import { AppService } from './app.service';

@Module({
  imports: [ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
