import { AppModule } from './app.module';

describe('AppModule', () => {
    test("App module should be defined", async () => {
        expect(new AppModule()).toBeDefined();
    });
});