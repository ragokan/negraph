import { MinLength } from "class-validator";

export class CreatePostDto {
  @MinLength(5, { message: "Title is too short!" })
  title: string;
}
