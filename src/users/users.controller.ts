import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    // return 'Semua user';
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    return {
      message: 'Create user',
      data: CreateUserDto,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return 'Update user ' + id;
  }

  @Delete(':id')
  remove() {
    return 'Delete user';
  }
}
