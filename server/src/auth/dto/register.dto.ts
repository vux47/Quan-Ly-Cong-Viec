import { IsEmail, IsNotEmpty, MinLength, Length } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Email không được để trống.' })
  @IsEmail({}, { message: 'Định dạng Email không hợp lệ.' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống.' })
  @MinLength(6, { message: 'Mật khẩu bắt buộc phải từ 6 ký tự trở lên.' })
  password: string;

  @IsNotEmpty({ message: 'Họ và tên không được để trống.' })
  @Length(2, 50, { message: 'Họ và tên phải có độ dài từ 2 đến 50 ký tự.' })
  fullName: string;
}