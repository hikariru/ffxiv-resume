import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(characterId: number, token: string): Promise<any> {
    const player = await this.authService.validatePlayer(characterId, token);
    if (!player) {
      throw new UnauthorizedException();
    }
    return player;
  }
}
