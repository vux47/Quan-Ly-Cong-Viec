agy
npm run dev //front
npm run start:dev //back
# Quản Lý Công Việc

## Cấu trúc Project (Chốt)

```text
Quan-Ly-Cong-Viec/
│
├── backend/                  # Backend NestJS
│   ├── src/
│   │   ├── auth/             # Module xác thực
│   │   ├── users/            # Module người dùng
│   │   ├── categories/       # Module danh mục
│   │   ├── tasks/            # Module công việc
│   │   ├── common/           # Filter, Guard, Interceptor chung
│   │   └── config/           # Cấu hình Database, JWT
│   │
│   ├── test/
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── nest-cli.json
│   └── tsconfig.json
│
├── frontend/                 # Frontend React + React Bootstrap
│   ├── public/
│   ├── src/
│   │   ├── api/              # Axios & API endpoints
│   │   ├── assets/           # Media & icons
│   │   ├── components/       # UI Components
│   │   ├── hooks/            # Custom Hooks
│   │   ├── layouts/          # Layouts
│   │   ├── pages/            # Views / Pages
│   │   ├── routes/           # Routing configuration
│   │   ├── services/         # Business & API Services
│   │   ├── styles/           # CSS / Styles
│   │   ├── utils/            # Helper & Constants
│   │   ├── App.jsx
│   │   └── index.js
│   │
│   └── package.json
│
├── database/                 # Cơ sở dữ liệu
│   ├── schema.sql            # Script tạo bảng
│   ├── seed.sql              # Dữ liệu mẫu
│   └── README.md             # Hướng dẫn CSDL
│
├── docs/                     # Tài liệu thiết kế & Báo cáo
│   ├── uml/
│   ├── api/
│   └── report/
│
├── .gitignore
├── LICENSE
└── README.md
```

## Hướng dẫn khởi chạy

### 1. Backend (NestJS)
```bash
cd backend
npm install
npm run start:dev
```

### 2. Frontend (ReactJS)
```bash
cd frontend
npm install
npm start
```