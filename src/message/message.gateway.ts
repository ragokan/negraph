import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from "@nestjs/websockets";
import { MessageService } from "./message.service";
import { CreateMessageDto } from "./dto/create-message.dto";
import { UpdateMessageDto } from "./dto/update-message.dto";
import { Socket } from "socket.io";

@WebSocketGateway(8001, {
  cors: { origin: "*" },
  path: "/ws",
})
export class MessageGateway {
  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage("createMessage")
  create(
    @MessageBody() createMessageDto: CreateMessageDto,
    @ConnectedSocket() client: Socket
  ) {
    client.emit("findAllMessage", this.messageService.findAll());
    return this.messageService.create(createMessageDto);
  }

  @SubscribeMessage("findAllMessage")
  findAll() {
    return this.messageService.findAll();
  }

  @SubscribeMessage("findOneMessage")
  findOne(@MessageBody() id: number) {
    return this.messageService.findOne(id);
  }

  @SubscribeMessage("updateMessage")
  update(@MessageBody() updateMessageDto: UpdateMessageDto) {
    return this.messageService.update(updateMessageDto.id, updateMessageDto);
  }

  @SubscribeMessage("removeMessage")
  remove(@MessageBody() id: number) {
    return this.messageService.remove(id);
  }
}