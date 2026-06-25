import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  create(@Body() body: any) {
    return this.userService.create(body);
  }

  @Post('login')
  async login(@Body() loginDto: any, @Res({ passthrough: true }) res: Response) {
    const result = await this.userService.login(
      loginDto.username,
      loginDto.password,
    );

    if (!result) {
      return { message: 'Sai tài khoản hoặc mật khẩu' };
    }

    res.cookie('access_token', result.accessToken, {
      httpOnly: true,
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return {
      message: 'Đăng nhập thành công',
      user: result.user,
      accessToken: result.accessToken,
    };
  }

  @Get('cookie')
  getCookie(@Req() req: Request) {
    return req.cookies || {};
  }

  @Get('session')
  getSession(@Req() req: any) {
    return req.session || {};
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: any) {
    return {
      message: 'JWT xác thực thành công',
      user: req.user,
    };
  }
}
