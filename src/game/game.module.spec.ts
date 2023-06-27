import { GameModule } from './game.module';

describe('GameModule', () => {
    test("Game module should be defined", async () => {
        expect(new GameModule()).toBeDefined();
    });
});