import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostService {
  create(createPostDto: CreatePostDto): Post {
    return { id: 1, ...createPostDto };
  }

  findAll(): Post[] {
    return [
      { id: 1, title: "Hey" },
      { id: 2, title: "Ho" },
      { id: 3, title: "Let's go" },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
