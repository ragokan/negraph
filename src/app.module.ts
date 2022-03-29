import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PostModule } from "./post/post.module";
import { ConfigModule } from "@nestjs/config";
import { MessageModule } from "./message/message.module";
import { PrismaService } from "./common/services/prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "./env",
    }),
    PostModule,
    MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
