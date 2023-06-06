import { Body, Controller, Post } from '@nestjs/common';
import { GameService } from '../services/game.service';
import { GameInterface } from '../model/game.interface';

@Controller('/game')
export class GameController {
    constructor(private gameService: GameService) {}

    @Post()
    newGame(@Body() post: GameInterface) {
        return this.gameService.addNewGame(post)
    }
}
