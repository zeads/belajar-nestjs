import { Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    // return 'Semua user';
    return this.usersService.findAll();
  }

  @Post()
  create() {
    return 'Create user';
  }

  @Delete(':id')
  remove() {
    return 'Delete user';
  }
}
