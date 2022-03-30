import { Post } from "../../post/entities/post.entity";

export class Message {
  id: number;
  text: string;
  post?: Post;
  postId: number;
}
