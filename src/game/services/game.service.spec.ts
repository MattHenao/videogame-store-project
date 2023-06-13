import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { GameEntity } from '../model/game.entity';

describe('GameService', () => {
    let service: GameService;
    let repository: Repository<GameEntity>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
            GameService,
            { provide: getRepositoryToken(GameEntity), useClass: Repository },
            ],
        }).compile();

        service = module.get<GameService>(GameService);
        repository = module.get<Repository<GameEntity>>(getRepositoryToken(GameEntity));
    });

    describe('addNewGame', () => {
        it('should add a new game', async () => {
            const gameInterface = {
                id: 4,
                name: "Tetris",
                genre: "Puzzle",
                price: 10,
                quantity: 5
            };

            jest.spyOn(repository, 'save').mockResolvedValue(gameInterface);

            const result = await service.addNewGame(gameInterface);

            expect(repository.save).toHaveBeenCalledWith(gameInterface);
            expect(result).toEqual(gameInterface);
        });
    });

    describe('findAllGames', () => {
        it('should return all games', async () => {
            const findAllGames = [{
                id: 4,
                name: "Tetris",
                genre: "Puzzle",
                price: 10,
                quantity: 5
            },{
                id: 2,
                name: "Zelda",
                genre: "RPG",
                price: 50,
                quantity: 10
            }];

            jest.spyOn(repository, 'find').mockResolvedValue(findAllGames);

            const result = await service.findAllGames();

            expect(repository.find).toHaveBeenCalled();
            expect(result).toEqual(findAllGames);
        });

        it('should throw BadRequestException if there are no games', async () => {
            jest.spyOn(repository, 'find').mockResolvedValue([]);

            await expect(service.findAllGames()).rejects.toThrowError('No hay juegos en la tienda');
        });
    });

    describe('findById', () => {
        it('should return the game with the given ID', async () => {
            const gameId = 1;
            const findGame = {
                id: 2,
                name: "Dark Souls",
                genre: "RPG",
                price: 30,
                quantity: 15
            };

            jest.spyOn(repository, 'findOne').mockResolvedValue(findGame);

            const result = await service.findById(gameId);

            expect(repository.findOne).toHaveBeenCalledWith({ where: { id: gameId } });
            expect(result).toEqual(findGame);
        });

        it('should throw BadRequestException if the game is not found', async () => {
            const gameId = 1;

            jest.spyOn(repository, 'findOne').mockResolvedValue(null);

            await expect(service.findById(gameId)).rejects.toThrowError('Este juego no esta disponible');
        });
    });
});