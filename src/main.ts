import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { Message } from "./message/entities/message.entity";
import { MessageModule } from "./message/message.module";
import { PostModule } from "./post/post.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Negraph App")
    .setDescription("The documentation of the Negraph App!")
    .setVersion("1.0")
    .addTag("negraph")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document, {
    customSiteTitle: "Negraph App",
  });

  app.enableCors({
    origin: "*",
  });

  await app.listen(8000);
}
bootstrap();
