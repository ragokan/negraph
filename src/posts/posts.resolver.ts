import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreatePostInput } from "./dto/create.input";
import { Post } from "./entities/post.entity";
import { PostsService } from "./posts.service";

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post], { name: "posts" })
  findAll() {
    return this.postsService.findAll();
  }

  @Mutation(() => Post, { name: "createPost" })
  createPost(@Args("input") input: CreatePostInput) {
    return this.postsService.create(input);
  }
}
