# Quản-Lý-Công-Việc

## Dev Container

Repo đã có cấu hình Dev Container cho NodeJS, TypeScript, Git, MySQL Client, GitHub Copilot và NestJS CLI.

### Cách dùng

1. Mở repo bằng VS Code.
2. Chọn mở trong Dev Container.
3. Chạy `npm install` nếu VS Code chưa tự cài dependencies.
4. Dùng `npm run start:dev` để chạy ứng dụng.
5. Dùng `npm run build` rồi `npm run start` nếu muốn chạy bản đã biên dịch.


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

## Task Module

Chức năng:

- Create Task
- Read Task
- Update Task
- Delete Task
- Assign Task cho thành viên
- Update Status: `To Do`, `Doing`, `Done`

API:

- `POST /tasks`
- `GET /tasks`
- `GET /tasks/:id`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

Mô tả ngắn:

- `POST /tasks` dùng để tạo công việc mới.
- `GET /tasks` dùng để lấy danh sách công việc.
- `GET /tasks/:id` dùng để xem chi tiết một công việc.
- `PATCH /tasks/:id` dùng để cập nhật tiêu đề, mô tả, trạng thái và người được giao.
- `DELETE /tasks/:id` dùng để xóa công việc.
