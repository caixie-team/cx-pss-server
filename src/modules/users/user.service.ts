import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { User } from '@app/entity';
import { Connection, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
// import {User} from '@app/modules/users/user.interface';
import { CreateUserDto } from '@app/modules/users/dto/create-user.dto';
import { patchEntity } from '@app/service/helpers/utils/patch-entity';
import { ID } from '@app/common/shared-types';

@Injectable()
export class UserService {
  constructor(
    @InjectConnection() private readonly connection: Connection,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
  }

  async create(dto: CreateUserDto): Promise<User> {
    console.log(dto)
    const newUser = new User();
    newUser.nickName = dto.nickName;
    newUser.gender = dto.gender | 0;//性别 0：未知、1：男、2：女
    newUser.openId = dto.openId;
    newUser.avatarUrl = dto.avatarUrl;
    newUser.country = dto.country;
    newUser.province = dto.province;
    newUser.city = dto.city;
    newUser.phoneNumber = dto.phoneNumber;
    newUser.status = 1;//用户状态: 0:禁用 1:正常
    newUser.createdAt = new Date();
    newUser.updatedAt = new Date();
    const res = await this.userRepository.save(newUser);
    return res;
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  // async createOrUpdate(input: Partial<CreateUserDto>): Promise<User> {
  //   let user: User;
  //   const existing = await this.userRepository.findOne({
  //     where: {
  //       identifier: input.identifier,
  //     },
  //   });
  //   if (existing) {
  //     user = patchEntity(existing, input);
  //     // user = new Users(input);
  //   } else {
  //     user = new User(input);
  //   }

  //   return this.userRepository.save(user);
  // }

  // public update(user: Users): Promise<Users> {
  // return this.userRepository.save(newUser).then(user => {
  //   return user;
  // });
  // }

  // 创建几个相片
  async updateUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }


  // public getDetailById(id: number): Promise<User> {
  //   return this.userRepository.findOne({
  //     relations: ['metas'],
  //     where: {
  //       id,
  //     },
  //   });
  // }


}
