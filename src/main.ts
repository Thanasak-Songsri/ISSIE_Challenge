import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Rider-APP API')
  .setDescription('The API description for Rider-APP')
  .setVersion('1.0')
  .build();


const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup('api', app, document);

  console.log(process.env.PORT);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
