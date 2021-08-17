import { Injectable } from '@nestjs/common';
import {PlayerService} from "../services/player.service";

@Injectable()
export class AuthService {
  constructor(private playerService: PlayerService) {}

  async validatePlayer(characterId: number, token: string): Promise<any> {
    const player = await this.playerService.findByCharacterId(characterId)

    const retrievedToken = await this.retrieveToken(characterId)
    if (token === retrievedToken) {
      return player;
    }

    return null;
  }

  async retrieveToken(characterId: number): Promise<string> {
    return 'some retrieved token'
  }
}
