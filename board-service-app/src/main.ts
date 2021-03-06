import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  // swagger
  const options = new DocumentBuilder()
    .setTitle('API !!!')
    .setDescription('API Swagger')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // TODO: 로깅처리 필요

  await app.listen(3000);
}
bootstrap();
