import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './games/game.module';
import { GenreModule } from './genre/genre.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GameModule, GenreModule, PrismaModule, ProfileModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
