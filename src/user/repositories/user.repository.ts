import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  private readonly users: UserEntity[] = [];

  findAll(): UserEntity[] {
    return this.users;
  }

  findByUsername(username: string): UserEntity | undefined {
    return this.users.find(user => user.username === username);
  }

  create(user: UserEntity): UserEntity {
    this.users.push(user);
    return user;
  }
}