import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/services/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.userService.findByUsername(username);

    if (!user) throw new UnauthorizedException('Sai tài khoản');

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new UnauthorizedException('Sai mật khẩu');

    const payload = {
      id: user.id,
      username: user.username,
    };

    return {
      accessToken: this.jwtService.sign(payload),
      user: payload,
    };
  }
}