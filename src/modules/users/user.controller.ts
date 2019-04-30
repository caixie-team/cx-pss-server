import { User } from '@app/entity';
import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from '@app/modules/users/user.service';
import { CreateUserDto } from '@app/modules/users/dto/create-user.dto';
import { JwtAuthGuard } from '@app/guards/auth.guard';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('user')
export class UserController {

  constructor(
    private readonly userService: UserService,
  ) {
  }

  @Get('list')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  // @Get(':type')
  // findByType(@Param('type') type: string): Promise<Users> {
  //     return this.userService.getDetailById(id);
  // }

  // @Get('me')
  // @UseGuards(JwtAuthGuard)
  // async oneself(@Req() request): Promise<User> {
  //   const user = await this.userService.findByIdentifier(request.user);
  //   if (user) {
  //     return user;
  //   }
  //   return null;
  // }

  // @Get(':id')
  // findOne(@Param('id') id: number): Promise<User> {
  //   return this.userService.getDetailById(id);
  // }
}
