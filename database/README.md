# Hướng Dẫn Khởi Tạo & Import CSDL (Database)

## 1. SQLite (Mặc định)
Dữ liệu SQLite local được tự động khởi tạo khi ứng dụng backend chạy (`backend/src/config/database.config.ts`).

## 2. MySQL / PostgreSQL (Tùy chọn)
Để khởi tạo bảng thủ công bằng script SQL:

1. Mở CSDL MySQL hoặc tương đương.
2. Chạy file `schema.sql` để tạo cấu trúc bảng:
   ```bash
   mysql -u root -p database_name < schema.sql
   ```
3. Chạy file `seed.sql` để chèn dữ liệu mẫu:
   ```bash
   mysql -u root -p database_name < seed.sql
   ```
