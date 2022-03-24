import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Post {
  id: number;
  title: string;
}
