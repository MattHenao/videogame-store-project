import { Module } from '@nestjs/common';
import { GameService } from './services/game.service';
import { GameController } from './controllers/game.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './model/game.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GameEntity])
  ],
  providers: [GameService],
  controllers: [GameController]
})
export class GameModule {

}
