import { BadRequestException } from "@nestjs/common";
import { GameController } from "./game.controller";

describe('GameController', () => {
    let gameController: GameController;
    let gameService: any;

    beforeEach(() => {
        gameService = {
            addNewGame: jest.fn(),
            findAllGames: jest.fn(),
            findById: jest.fn(),
            updateGame: jest.fn(),
            deleteGame: jest.fn()
        }
        gameController = new GameController(gameService);
    });

    describe('newGame', () => {
        test('Should throw error for missing name', async () =>{
            const Game ={
                genre: 'rpg',
                price: 200,
                quantity: 2
            }
            try {
                await gameController.newGame(Game);
            } catch (e) {
                expect(e).toEqual(new BadRequestException('Falta uno o mas parametros por rellenar'));
            }
            expect(gameService.addNewGame).not.toHaveBeenCalledWith(Game);
        });

        test('Should throw error for missing genre', async () =>{
            const Game ={
                name: 'zelda',
                price: 200,
                quantity: 2
            }
            try {
                await gameController.newGame(Game);
            } catch (e) {
                expect(e).toEqual(new BadRequestException('Falta uno o mas parametros por rellenar'));
            }
            expect(gameService.addNewGame).not.toHaveBeenCalledWith(Game);
        });

        test('Should throw error for missing price', async () =>{
            const Game ={
                name: 'zelda',
                genre: 'rpg',
                quantity: 2
            }
            try {
                await gameController.newGame(Game);
            } catch (e) {
                expect(e).toEqual(new BadRequestException('Falta uno o mas parametros por rellenar'));
            }
            expect(gameService.addNewGame).not.toHaveBeenCalledWith(Game);
        });

        test('Should throw error for missing quantity', async () =>{
            const Game ={
                name: 'zelda',
                genre: 'rpg',
                price: 200
            }
            try {
                await gameController.newGame(Game);
            } catch (e) {
                expect(e).toEqual(new BadRequestException('Falta uno o mas parametros por rellenar'));
            }
            expect(gameService.addNewGame).not.toHaveBeenCalledWith(Game);
        });

        test('Should called newGame method', async () =>{
            const Game ={
                name: 'zelda',
                genre: 'rpg',
                price: 200,
                quantity: 2
            }

            await gameController.newGame(Game);
            expect(gameService.addNewGame).toHaveBeenCalledWith(Game);
        });
    });

    describe("findAllGames", () => {
        test("Should called findAllGames method", async () => {
            await gameController.findAllGames();
            expect(gameService.findAllGames).toHaveBeenCalled();
        });
    });

    describe("findGameById", () => {
        test("Should called findGameById method", async () => {
            const Game = {
                id: 1
            }
            await gameController.findGameById(Game.id);
            expect(gameService.findById).toHaveBeenCalledWith(Game.id);
        });
    });

    describe("updateGames", () => {
        test("Should called updateGames method", async () => {
            const Game = {
                id: 1,
                name: "zelda"
            }

            await gameController.updateGames(Game.id, Game);
            expect(gameService.updateGame).toHaveBeenCalledWith(Game.id, Game);
        });
    });

    describe("deleteGames", () => {
        test("Should called deleteGames method", async () => {
            const Game = {
                id: 1,
                name: "zelda",
                genre: "rpg",
                price: 120,
                quantity: 90
            }

            await gameController.deleteGames(Game.id);
            expect(gameService.deleteGame).toHaveBeenCalledWith(Game.id);
        });
    });
});

