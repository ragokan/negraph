import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
  UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Request } from "express";

@Injectable()
class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    if (request.headers.authorization === "Bearer secret") {
      return true;
    }
    throw new HttpException("You are not authorized men!", 401);
  }
}

export const Auth =
  (): ClassDecorator & MethodDecorator =>
  (...args: [constructor: Function]) => {
    {
      UseGuards(AuthGuard)(...args);
      ApiBearerAuth()(...args);
    }
  };
