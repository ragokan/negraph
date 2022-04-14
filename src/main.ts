import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { PrismaService } from "./common/prisma/prisma.service";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");

  // Documents
  const config = new DocumentBuilder()
    .setTitle("Negraph App")
    .setDescription("The documentation of the Negraph App!")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document, {
    customSiteTitle: "Negraph App",
  });

  // Database
  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  // Validation
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({ origin: ["*"] });

  const PORT = process.env.PORT || 8000;
  await app.listen(PORT);
}

bootstrap();
