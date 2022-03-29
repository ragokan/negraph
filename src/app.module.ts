import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostModule } from "./post/post.module";
import { ConfigModule } from "@nestjs/config";
import { MessageModule } from "./message/message.module";
import { PrismaService } from "./common/prisma/prisma.service";
import { PrismaModule } from "./common/prisma/prisma.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./env",
    }),
    PrismaModule.forRoot(),
    PostModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
