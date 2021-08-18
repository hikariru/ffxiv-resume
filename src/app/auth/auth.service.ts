import { Injectable } from '@nestjs/common'
import { PlayerService } from '../service/player.service'

@Injectable()
export class AuthService {
  constructor(private playerService: PlayerService) {}

  async validatePlayer(playerId: number, password: string): Promise<any> {
    const player = await this.playerService.findByCharacterId(playerId)

    if (await player.validatePassword(password)) {
      return player
    }

    return null
  }
}
