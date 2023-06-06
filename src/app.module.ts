import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameModule } from './game/game.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot( { isGlobal: true } ),
    TypeOrmModule.forRoot( {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2703',
      database: 'videogames_store_db',
      autoLoadEntities: true,
      synchronize: true
    } ),
    GameModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
