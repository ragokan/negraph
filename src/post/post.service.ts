import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/prisma/prisma.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Post } from "./entities/post.entity";

@Injectable()
export class PostService {
  constructor(private db: PrismaService) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post = await this.db.post.create({
      data: createPostDto,
    });
    return post;
  }

  async findAll(): Promise<Post[]> {
    return this.db.post.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post with ${JSON.stringify(updatePostDto)} `;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
