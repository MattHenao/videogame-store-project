import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

    async findAllGames() {
        const findAllGames = await this.gameRepository.find();
        if(findAllGames.length === 0) {
            throw new BadRequestException('No hay juegos en la tienda')
        }
        return findAllGames;
    }

    async findById(id: number){
        const findGame = await this.gameRepository.findOne({ where: { id } });
        if(!findGame){
            throw new BadRequestException('Este juego no esta disponible');
        }
        return findGame;
    }

    async updateGame(id: number, gameInterface: GameInterface) {
        const updatedGame = await this.gameRepository.update(id, gameInterface);
        if (updatedGame.affected === 0) {
            throw new NotFoundException('No se pudo encontrar el juego para actualizar');
        }
        return updatedGame;
    }

    async deleteGame(id: number) {
        const deletedGame = await this.gameRepository.delete(id);
        if (deletedGame.affected === 0) {
            throw new NotFoundException('No se pudo encontrar el juego para eliminar');
        }
        return deletedGame;
    }
}
