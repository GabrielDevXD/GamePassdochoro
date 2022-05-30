import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @ApiProperty({ description: 'Nome Do game', example: 'The forest' })
  @IsString()
  title: string;
  @ApiProperty({
    description: 'Image do game',
    example: 'LinkDogame',
  })
  @IsString()
  coverImageUrl: string;
  @IsString()
  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'Jogo feito por gabsDoMal',
  })
  description: string;
  @ApiProperty({ description: 'ano do jogo', example: 2000 })
  @IsNumber()
  @IsPositive()
  year: number;
  @ApiProperty({ description: 'Nota do game', example: 4 })
  @IsNumber()
  @IsPositive()
  imdbScore: number;
  @IsUrl()
  @ApiProperty({
    description: 'trailer do jogo',
    example: 'Link do trailber',
  })
  trailerYoutubeUrl: string;
  @IsUrl()
  @ApiProperty({
    description: 'gameplay de teste do jogo',
    example: 'Link Da gameplay',
  })
  gameplayYoutubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Genero',
    example: 'terror',
  })
  genreName: string;
}
