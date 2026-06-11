# Quản-Lý-Công-Việc

## Dev Container

Repo đã có cấu hình Dev Container cho NodeJS, TypeScript, Git, MySQL Client, GitHub Copilot và NestJS CLI.

### Cách dùng

1. Mở repo bằng VS Code.
2. Chọn mở trong Dev Container.
3. Chạy `npm install` nếu VS Code chưa tự cài dependencies.
4. Dùng `npm run start:dev` để chạy ứng dụng.

## Cấu hình môi trường

File `.env` đã được chuẩn bị sẵn placeholder để kết nối Aiven sau:

```env
PORT=3000
DB_HOST=your-aiven-host
DB_PORT=3306
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=your-db-name
```

## Cấu trúc Layer Architecture

- `src/task/controllers`
- `src/task/services`
- `src/task/repositories`
- `src/task/entities`
- `src/task/dto`
- `src/user/controllers`
- `src/user/services`
- `src/user/repositories`
- `src/user/entities`
- `src/user/dto`
