import { ApiProperty } from '@nestjs/swagger';

import { IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Name Profile',
    example: 'GabsDoMal',
  })
  title: string;
  @IsString()
  @ApiProperty({
    description: 'img do perfil',
    example:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5jvUf3nBDJSv4znJefrGFloGX_2R8b1JqCg&usqp=CAU',
  })
  @IsString()
  imageUrl: string;
  @IsString()
  @ApiProperty({
    description: 'Id do user',
    example: '',
  })
  userId: string;

  @ApiProperty({
    description: 'Id do Jogo',
    example: '',
  })
  gameId?: string;
}
