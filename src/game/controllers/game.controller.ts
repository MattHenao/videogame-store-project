import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from '../services/game.service';
import { GameInterface } from '../model/game.interface';

@Controller('/game')
export class GameController {
    constructor(private gameService: GameService) {}

    @Post()
    newGame(@Body() post: GameInterface) {
        return this.gameService.addNewGame(post)
    }

    @Get()
    findAllGames() {
        return this.gameService.findAllGames();
    }
}
