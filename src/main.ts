import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  //Swagger

  const config = new DocumentBuilder()
    .setTitle('GamePass')
    .setDescription('Coe meno fiz chorando menor')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('Games')
    .addTag('Genres')
    .addTag('user')
    .addTag('profile')
    .addTag('homepage')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3333);
}

bootstrap();
