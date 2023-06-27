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
            update: jest.fn(),
            delete: jest.fn()
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
        test('Should throw message error', async () => {
            try{
                repo.find.mockReturnValue(Promise.resolve([]));
                await gameService.findAllGames();
            }
            catch(e) {
                expect(e).toEqual(new BadRequestException('No hay juegos en la tienda'));
            }
            expect(repo.find).toHaveBeenCalledTimes(1);
        });

        test('Shoud find all games', async () => {
            repo.find.mockReturnValue(Promise.resolve([{name: "zelda"}]));
            await gameService.findAllGames();
            expect(repo.find).toHaveBeenCalled();
        });
    });

    describe('findById', () => {
        test('Should throw message error', async () => {
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

        test('Should find a game by id', async () => {
            const Game = {
                id: 1,
                name: 'zelda',
                genre: 'rpg',
                price: 60,
                quantity: 12
            }

            repo.findOne.mockReturnValue(Promise.resolve({ where: {"id": Game.id} }));
            await gameService.findById(Game.id);
            expect(repo.findOne).toHaveBeenCalledWith({ where: {"id": Game.id} });
        });
    });

    describe('updateGame', () => {
        const Game = {
            id: 1,
            name: 'zelda',
            genre: 'rpg',
            price: 60,
            quantity: 12
        }
        test('Should throw message error', async () => {
            try {
                repo.update.mockReturnValue(Promise.resolve({affected: 0}));
                await gameService.updateGame(Game.id, Game);
            } catch (e) {
                expect(e).toEqual(new NotFoundException('No se pudo encontrar el juego para actualizar'));
            }
            expect(repo.update).toHaveBeenCalledWith(Game.id, Game);
        });

        test('Should update a game', async () => {
            const Game = {
                id: 1,
                name: 'zelda',
                genre: 'rpg',
                price: 60,
                quantity: 5
            }

            repo.update.mockReturnValue(Promise.resolve([Game.id]));
            await gameService.updateGame(Game.id, Game);
            expect(repo.update).toHaveBeenCalledWith(Game.id, Game);
        })
    });

    describe('deleteGame', () => {
        test('Should throw message error',async () => {
            const Game = {
                id: 1
            }

            try {
                repo.delete.mockReturnValue(Promise.resolve({affected: 0}));
                await gameService.deleteGame(Game.id);
            } catch (e) {
                expect(e).toEqual(new NotFoundException('No se pudo encontrar el juego para eliminar'));
            }
            expect(repo.delete).toHaveBeenCalledWith(Game.id);
        });

        test('Should delete a game', async () => {
            const Game = {
                id: 1,
                name: 'zelda',
                genre: 'rpg',
                price: 60,
                quantity: 5
            }

            repo.delete.mockReturnValue(Promise.resolve([Game.id]));
            await gameService.deleteGame(Game.id);
            expect(repo.delete).toHaveBeenCalledWith(Game.id);
        });
    });
});