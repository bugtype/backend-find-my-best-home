import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Board } from './modes/Board';

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

  await app.listen(3000);
}
bootstrap();
