
import {ApiExtraModels} from '@nestjs/swagger'
import {CreatePostDto} from '../../post/dto/create-post.dto'

export class CreateMessagePostRelationInputDto {
    create: CreatePostDto;
  }

@ApiExtraModels(CreatePostDto,CreateMessagePostRelationInputDto)
export class CreateMessageDto {
  text: string;
post: CreateMessagePostRelationInputDto;
}
