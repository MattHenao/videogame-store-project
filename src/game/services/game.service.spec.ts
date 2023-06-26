import { BadRequestException, NotFoundException } from '@nestjs/common';
import { GameService } from './game.service';
import { ApiGatewayTimeoutResponse } from '@nestjs/swagger';

describe('GameService', ()=> {
    let gameService: GameService;
    let repo: any;
    beforeEach(()=> {
        repo = {
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn()
        };
        gameService = new GameService(repo);
    });

    describe('addNewGame', ()=> {
        test('Should add new game in repository', async ()=> {
            const Game = {
                name: 'Zelda',
                genre: 'rpg',
                price: 200,
                quantity: 2
            };
            await gameService.addNewGame(Game);
            expect(repo.save).toBeCalledWith(Game);
        })
    })

    describe('findAllGames', () => {
        test('Should verify if one or more games exist', async () => {
            try{
                repo.find.mockReturnValue(Promise.resolve([]));
                await gameService.findAllGames();
            }
            catch(e) {
                expect(e).toEqual(new BadRequestException('No hay juegos en la tienda'));
            }
            expect(repo.find).toHaveBeenCalledTimes(1);
        });
    });

    describe('findById', () => {
        test('Should verify if a game exist', async () => {
            const Game = {
                id: 1,
                name: 'zelda',
                genre: 'rpg',
                price: 60,
                quantity: 12
            }
            try{
                await gameService.findById(Game.id);
            }
            catch(e){
                expect(e).toEqual(new BadRequestException('Este juego no esta disponible'));
            }
            expect(repo.findOne).toHaveBeenCalledTimes(1);
        });
    });

    describe('update', () => {
        test('Should update one or more fields of a game',async () => {
            const Game = {
                id: 1,
                name: 'zelda',
                genre: 'rpg',
                price: 60,
                quantity: 5
            }

            try {
                repo.update.mockReturnValue(Promise.resolve([]));
                await gameService.updateGame(Game.id, Game);
            } catch (e) {
                expect(e).toEqual(new NotFoundException('No se pudo encontrar el juego para actualizar'));
            }
            expect(repo.update).toHaveBeenCalledTimes(1);
        });
    });
});