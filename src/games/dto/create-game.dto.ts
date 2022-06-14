import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateGameDto {
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Resident evil 4 Remake',
  })
  @IsString()
  title: string;
  @ApiProperty({
    description: 'Link da img do jogo',
    example:
      'https://s2.glbimg.com/VaUxKl3TltSUn8D9HR9M2cNSjlo=/0x0:1261x700/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/W/3/ky6oINQtWF38BVZavc6w/remake-resident-evil-4.jpg',
  })
  @IsUrl()
  coverImageUrl: string;
  @ApiProperty({
    description: 'Descrição sobre o jogo',
    example:
      'Em um trailer mostrado no evento, a Capcom exibiu cenas de gameplay e trechos cinematográficos de Resident Evil 4 Remake. No vídeo, é possível ver tanto Leon quanto uma outra personagem que pode ser Ashley Gragham — filha do presidente dos EUA que é sequestrada e levada a um vilarejo misterioso na Europa.',
  })
  @IsString()
  description: string;
  @ApiProperty({
    description: 'Ano de lançamento do jogo',
    example: 2023,
  })
  @IsNumber()
  year: number;
  @ApiProperty({
    description: 'Nota do jogo',
    example: 5,
  })
  @IsNumber()
  imdbScore: number;
  @ApiProperty({
    description: 'Link do trailer do game',
    example: 'https://www.youtube.com/watch?v=9iy6gHDKvzA',
  })
  @IsUrl()
  trailerYoutubeUrl: string;
  @ApiProperty({
    description: 'Link da gameplay',
    example: 'https://www.youtube.com/watch?v=9iy6gHDKvzA',
  })
  @IsUrl()
  gameplayYoutubeUrl: string;
  @ApiProperty({
    description: 'Gênero do jogo (Você deve colocar obrigatoriamente) ',
    example: 'Terror',
  })
  genreName: string;
}
