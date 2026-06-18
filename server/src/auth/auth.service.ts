import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../users/users.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  // ĐĂNG KÝ AN TOÀN
  async register(registerDto: RegisterDto): Promise<{ message: string }> {
    const { email, password, fullName } = registerDto;

    const isEmailExist = await this.userRepository.findOne({ where: { email } });
    if (isEmailExist) {
      throw new ConflictException('Email này đã được sử dụng trên hệ thống.');
    }

    // Mã hóa mật khẩu trước khi lưu vào DB
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = this.userRepository.create({ email, passwordHash, fullName });
    await this.userRepository.save(user);

    return { message: 'Đăng ký tài khoản người dùng thành công!' };
  }

  // ĐĂNG NHẬP VÀ CẤP JWT TOKEN
  async login(loginDto: LoginDto): Promise<{ accessToken: string; user: any }> {
    const { email, password } = loginDto;

    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Tài khoản hoặc mật khẩu không chính xác.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Tài khoản hoặc mật khẩu không chính xác.');
    }

    const payload = { sub: user.id, email: user.email };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
      },
    };
  }
}