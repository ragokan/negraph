import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { PrismaService } from "./common/prisma/prisma.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Documents
  const config = new DocumentBuilder()
    .setTitle("Negraph App")
    .setDescription("The documentation of the Negraph App!")
    .setVersion("1.0")
    .addTag("negraph")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document, { customSiteTitle: "Negraph App" });

  // Database
  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  app.enableCors({ origin: ["*"] });

  const PORT = process.env.PORT || 8000;
  await app.listen(PORT);
}

bootstrap();
