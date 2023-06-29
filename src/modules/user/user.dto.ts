import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty({
    required: true,
    type: 'string',
    default: '',
  })
  firstName: string;

  @ApiProperty({
    required: true,
    type: 'string',
    default: '',
  })
  lastName: string;
}
