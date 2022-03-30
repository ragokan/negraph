import { Message } from "../../message/entities/message.entity";

export class Post {
  id: number;
  title: string;
  messages?: Message[];
  createdAt: Date;
  updatedAt: Date;
}
