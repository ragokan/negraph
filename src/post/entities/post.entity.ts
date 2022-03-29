import { Post as IPost } from "@prisma/client";

export class Post implements IPost {
  id: number;
  title: string;
}
