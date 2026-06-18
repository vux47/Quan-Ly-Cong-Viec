import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repo: Repository<UserEntity>,
  ) {}

  async create(createDto: CreateUserDto): Promise<UserEntity> {
    const { email, password, fullName } = createDto;

    const user = this.repo.create({ email, fullName });
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.passwordHash = await bcrypt.hash(password, salt);
    }

    return this.repo.save(user);
  }

  findAll(): Promise<UserEntity[]> {
    return this.repo.find();
  }

  async findOne(id: string): Promise<UserEntity> {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.findOne(id);
    if (dto.password) {
      const salt = await bcrypt.genSalt(10);
      user.passwordHash = await bcrypt.hash(dto.password, salt);
    }
    if (dto.fullName) user.fullName = dto.fullName;
    if (dto.email) user.email = dto.email;

    return this.repo.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
