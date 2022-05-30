import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'nome do usuário',
    example: 'GabsDomal',
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: 'email do usuário',
    example: 'vinimedaum10@gmail.com',
  })
  email: string;
  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraquinha',
  })
  @ApiProperty({
    description: 'senha usuário',
    example: 'GabsDoMal123@',
  })
  password: string;
  @ApiProperty({
    description: 'Confirme sua senha, ela deve ser identida',
    example: 'GabsDoMal123@',
  })
  confirmPassword: string;
  @IsString()
  @ApiProperty({
    description: 'cpf do usuário',
    example: '125.368.830-35',
  })
  cpf: string;
  @ApiProperty({
    description: 'Perm do User',
    example: false,
  })
  isAdmin: boolean;
}
