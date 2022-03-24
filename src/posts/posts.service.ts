import { Injectable } from "@nestjs/common";
import { CreatePostInput } from "./dto/create.input";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostsService {
  posts: Post[] = [];

  findAll() {
    return this.posts;
  }

  create(input: CreatePostInput) {
    const post = {
      id: this.posts.length + 1,
      ...input,
    };
    this.posts.push(post);
    return post;
  }
}
