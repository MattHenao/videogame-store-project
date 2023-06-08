import { Injectable } from '@nestjs/common';
import { GameEntity } from '../model/game.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GameInterface } from '../model/game.interface';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(GameEntity)
        private readonly gameRepository: Repository<GameEntity>
    ){}

    addNewGame(gameInterface: GameInterface) {
        return this.gameRepository.save(gameInterface);
    }

    findAllGames() {
        return this.gameRepository.find();
    }

    findById(id: number){
        return this.gameRepository.findOne({ where: {id} });
    }

    updateGame(id: number, gameInterface: GameInterface) {
        return this.gameRepository.update(id, gameInterface);
    }

    deleteGame(id: number) {
        return this.gameRepository.delete(id);
    }
}