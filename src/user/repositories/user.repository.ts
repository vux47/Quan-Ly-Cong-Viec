import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  private readonly users: UserEntity[] = [];

  findAll(): UserEntity[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto): UserEntity {
    const user: UserEntity = {
      id: this.users.length + 1,
      fullName: createUserDto.fullName,
      email: createUserDto.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);
    return user;
  }
}