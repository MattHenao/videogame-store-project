import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { GameService } from '../services/game.service';
import { GameInterface } from '../model/game.interface';

@Controller('/game')
export class GameController {
    constructor(private gameService: GameService) {}

    @Post()
    newGame(@Body() game: GameInterface) {
        return this.gameService.addNewGame(game)
    }

    @Get()
    findAllGames() {
        return this.gameService.findAllGames();
    }

    @Put(':id')
    updateGames(@Param('id') id: number, @Body() game: GameInterface) {
        return this.gameService.updateGame(id, game);
    }
}
