import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Email không đúng định dạng.' })
  email: string;

  @IsOptional()
  @IsString()
  @Length(6, 255, { message: 'Mật khẩu phải có ít nhất 6 ký tự.' })
  password?: string;

  @IsString()
  @Length(2, 100)
  fullName: string;
}
