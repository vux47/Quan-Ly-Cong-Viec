import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  findAll() {
    return this.userRepo.find();
  }
findByUsername(username: string) {
  return this.userRepo.findOne({ where: { username } });
}
  findById(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }

  async create(data: { username: string; password: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.userRepo.create({
      username: data.username,
      password: hashedPassword,
    });

    return await this.userRepo.save(user);
  }

  async login(username: string, password: string) {
    const user = await this.userRepo.findOne({ where: { username } });

    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return {
      accessToken: 'dummy-jwt-token-123456',
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }
}