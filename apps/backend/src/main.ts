import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as compression from 'compression';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(compression());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidUnknownValues: true,
      validationError: {
        target: false,
        value: false,
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Voluble API')
    .setDescription('Curated API for Voluble')
    .setVersion('0.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT);
}
bootstrap();
