import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GameModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.19.0.2',
      port: 5432,
      username: 'devco',
      password: 'devco',
      database: 'postgres',
      entities: [
        __dirname + '/../**/*.entity.js',
      ],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
