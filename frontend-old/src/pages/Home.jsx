import React from 'react';
import Banner from '../components/Banner';

function Home() {
  return (
    <div className="home-page">
      <Banner />
      <div className="container py-4">
        <h2>Trang chủ - Quản Lý Công Việc</h2>
        <p>Chào mừng bạn đến với hệ thống quản lý công việc.</p>
      </div>
    </div>
  );
}

export default Home;
