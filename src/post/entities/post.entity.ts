import { Comment } from "src/comment/entities/comment.entity";

export class Post {
  id: number;
  title: string;

  comments: Comment[];
}
