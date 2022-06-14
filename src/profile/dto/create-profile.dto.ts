import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'nome do perfil',
    example: 'TanjasXD',
  })
  title: string;
  @IsString()
  @ApiProperty({
    description: 'imagem do perfil',
    example:
      'https://mangaterial.tumblr.com/post/633312572382347264/can-you-make-some-guts-berserk-icons-please',
  })
  @IsString()
  imageUrl: string;

  @ApiProperty({
    description: 'id do game ',
    example: 'id',
  })
  gameId?: string;

  @ApiProperty({
    description: 'Id do game',
    example: 'id',
  })
  favoriteGameId?: string;
}
