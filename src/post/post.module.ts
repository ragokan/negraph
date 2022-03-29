import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { MessageService } from "src/message/message.service";

@Module({
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
