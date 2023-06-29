import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDTO } from './user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('getAll')
  @ApiTags('user')
  @ApiOperation({
    summary: '查询所有用户',
  })
  @ApiResponse({ type: [User] })
  async getAllUser() {
    return await this.usersService.findAll();
  }

  @Post('create')
  @ApiTags('user')
  @ApiOperation({
    summary: '创建新用户',
  })
  async addUser(@Body() userParams: UserDTO) {
    console.log(userParams);

    const newUser = new User();
    newUser.firstName = userParams.firstName;
    newUser.lastName = userParams.lastName;

    return await this.usersService.save(newUser);
  }

  @Delete(':id')
  @ApiTags('user')
  @ApiOperation({
    summary: '删除用户',
  })
  async deleteUser(@Param('id') id: number) {
    return await this.usersService.remove(id);
  }
}
