import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeMenu, setActiveMenu] = useState('Công việc');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('Tất cả');
  const [selectedStatusTab, setSelectedStatusTab] = useState('Tất cả');

  // Dữ liệu mẫu công việc
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Chuẩn bị báo cáo tuần',
      description: 'Tổng hợp KPI và gửi trưởng phòng.',
      category: 'Công việc',
      priority: 'Cao',
      deadline: '18/7/2026',
      status: 'Đang làm',
    },
    {
      id: 2,
      title: 'Ôn tập môn Cơ sở dữ liệu',
      description: 'Chương 4 & 5, bài tập cuối chương.',
      category: 'Học tập',
      priority: 'Trung bình',
      deadline: '20/7/2026',
      status: 'Đang làm',
    },
    {
      id: 3,
      title: 'Đi siêu thị mua đồ',
      description: '',
      category: 'Cá nhân',
      priority: 'Thấp',
      deadline: '17/7/2026',
      status: 'Đã xong',
    }
  ]);

  // Bộ lọc danh mục và trạng thái do Thành viên 3 phụ trách
  const filteredTasks = tasks.filter(task => {
    const matchCategory = selectedCategoryTab === 'Tất cả' || task.category === selectedCategoryTab;
    const matchStatus = selectedStatusTab === 'Tất cả' || task.status === selectedStatusTab;
    return matchCategory && matchStatus;
  });

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: '#f4f6f9' }}>
      
      {/* 1. THANH ĐIỀU HƯỚNG BÊN TRÁI (Sidebar) */}
      <div 
        className="d-flex flex-column text-white p-3" 
        style={{ width: '260px', backgroundColor: '#0f172a', minHeight: '100vh' }}
      >
        <div className="d-flex align-items-center mb-4 px-2">
          <div className="bg-warning p-2 rounded-3 me-2 text-dark fw-bold">📋</div>
          <div>
            <h5 className="m-0 fw-bold" style={{ fontSize: '1.1rem' }}>TASKFLOW</h5>
            <small className="text-muted" style={{ fontSize: '0.75rem' }}>Thành viên 3 - Quản lý</small>
          </div>
        </div>

        <NavMenu icon="🏠" label="Trang chủ" active={activeMenu === 'Trang chủ'} onClick={() => setActiveMenu('Trang chủ')} />
        <NavMenu icon="📊" label="Thống kê" active={activeMenu === 'Thống kê'} onClick={() => setActiveMenu('Thống kê')} />
        <NavMenu icon="📑" label="Công việc" active={activeMenu === 'Công việc'} onClick={() => setActiveMenu('Công việc')} />
        <NavMenu icon="📅" label="Lịch làm việc" active={activeMenu === 'Lịch làm việc'} onClick={() => setActiveMenu('Lịch làm việc')} />
        <NavMenu icon="✅" label="Đã hoàn thành" active={activeMenu === 'Đã hoàn thành'} onClick={() => setActiveMenu('Đã hoàn thành')} />
        <NavMenu icon="📝" label="Ghi chú" active={activeMenu === 'Ghi chú'} onClick={() => setActiveMenu('Ghi chú')} />

        <div className="mt-auto px-2 text-muted" style={{ fontSize: '0.75rem' }}>
          © 2026 TaskFlow - Nhóm BTL
        </div>
      </div>

      {/* 2. KHUNG NỘI DUNG CHÍNH (Main Content) */}
      <div className="flex-grow-1 d-flex flex-column">
        
        {/* Header Trên Cùng */}
        <Navbar bg="white" className="px-4 py-3 border-bottom shadow-sm justify-content-between">
          <div style={{ width: '350px' }}>
            <Form.Control 
              type="text" 
              placeholder="🔍 Tìm kiếm công việc theo phân công..." 
              className="bg-light border-0"
              style={{ fontSize: '0.9rem' }}
            />
          </div>
          <div className="d-flex align-items-center gap-3">
            <span style={{ cursor: 'pointer', fontSize: '1.2rem' }}>🔔</span>
            <div className="d-flex align-items-center gap-2 border-start ps-3">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '35px', height: '35px', fontWeight: 'bold' }}>
                3
              </div>
              <span className="fw-semibold" style={{ fontSize: '0.9rem' }}>Thành viên 3</span>
            </div>
          </div>
        </Navbar>

        {/* Nội dung thay đổi linh hoạt theo menu chọn của Thành viên 3 */}
        <div className="p-4 flex-grow-1">
          
          {activeMenu === 'Công việc' && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h3 className="fw-bold m-0" style={{ color: '#1e293b' }}>Quản lý Danh mục & Công việc</h3>
                  <p className="text-muted m-0" style={{ fontSize: '0.9rem' }}>Thực hiện phân loại, lọc trạng thái và kiểm soát tiến độ.</p>
                </div>
                <Button variant="warning" className="text-white fw-semibold px-3 py-2 shadow-sm" style={{ backgroundColor: '#f97316', border: 'none' }}>
                  + Thêm công việc
                </Button>
              </div>

              {/* Thẻ thống kê tổng quan */}
              <Row className="g-3 mb-4">
                <StatCard title="TỔNG SỐ" value={tasks.length} color="#0f172a" />
                <StatCard title="ĐẾN HẠN HÔM NAY" value={tasks.filter(t => t.deadline === '25/7/2026').length} color="#f59e0b" />
                <StatCard title="QUÁ HẠN" value="0" color="#ef4444" />
                <StatCard title="ĐÃ HOÀN THÀNH" value={tasks.filter(t => t.status === 'Đã xong').length} color="#10b981" />
              </Row>

              {/* Bộ lọc danh mục & trạng thái */}
              <div className="bg-white p-3 rounded-3 shadow-sm mb-4 d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div className="d-flex gap-2">
                  {['Tất cả', 'Công việc', 'Học tập', 'Cá nhân'].map((cat) => (
                    <Button 
                      key={cat}
                      variant={selectedCategoryTab === cat ? 'light' : 'link'}
                      className={`text-decoration-none px-3 py-1 rounded-pill ${selectedCategoryTab === cat ? 'fw-bold text-dark border shadow-sm' : 'text-muted'}`}
                      onClick={() => setSelectedCategoryTab(cat)}
                      style={{ fontSize: '0.85rem' }}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>

                <div className="d-flex gap-2 bg-light p-1 rounded-pill">
                  {['Tất cả', 'Đang làm', 'Đã xong'].map((status) => (
                    <button
                      key={status}
                      className={`btn btn-sm rounded-pill px-3 py-1 border-0 ${selectedStatusTab === status ? 'bg-white shadow-sm fw-bold text-dark' : 'text-muted bg-transparent'}`}
                      onClick={() => setSelectedStatusTab(status)}
                      style={{ fontSize: '0.8rem' }}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              {/* Danh sách Task Card */}
              <Row className="g-3">
                {filteredTasks.length > 0 ? (
                  filteredTasks.map((task) => (
                    <Col md={4} key={task.id}>
                      <Card className="border-0 shadow-sm p-3 h-100 rounded-3">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span className="badge bg-light text-secondary px-2 py-1" style={{ fontSize: '0.75rem' }}>
                            {task.category}
                          </span>
                          <span className={`badge ${task.priority === 'Cao' ? 'bg-danger-subtle text-danger' : task.priority === 'Trung bình' ? 'bg-warning-subtle text-warning' : 'bg-success-subtle text-success'}`} style={{ fontSize: '0.75rem' }}>
                            {task.priority}
                          </span>
                        </div>

                        <h5 className="fw-bold mb-1" style={{ fontSize: '1rem', color: '#1e293b' }}>{task.title}</h5>
                        <p className="text-muted mb-3" style={{ fontSize: '0.85rem', minHeight: '35px' }}>
                          {task.description || 'Không có mô tả chi tiết.'}
                        </p>

                        <div className="mt-auto pt-2 border-top d-flex justify-content-between align-items-center">
                          <small className="text-muted" style={{ fontSize: '0.8rem' }}>📅 {task.deadline}</small>
                          {task.status === 'Đã xong' ? (
                            <span className="text-success fw-semibold" style={{ fontSize: '0.8rem' }}>✅ Đã hoàn thành</span>
                          ) : (
                            <span className="text-warning fw-semibold" style={{ fontSize: '0.8rem', cursor: 'pointer' }}>⏱️ Đánh dấu xong</span>
                          )}
                        </div>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <Col md={12} className="text-center py-5 text-muted">Không tìm thấy công việc phù hợp với bộ lọc danh mục.</Col>
                )}
              </Row>
            </>
          )}

          {activeMenu === 'Thống kê' && (
            <div>
              <h3 className="fw-bold mb-3" style={{ color: '#1e293b' }}>📊 Báo cáo Thống kê & Tiến độ</h3>
              <Card className="border-0 shadow-sm p-4">
                <p className="text-muted">Phần hiển thị phân tích biểu đồ tỷ lệ hoàn thành công việc theo từng danh mục và mức độ ưu tiên do Thành viên 3 đảm nhận.</p>
                <ul>
                  <li>Tổng số lượng đầu việc: <strong>{tasks.length}</strong></li>
                  <li>Đã hoàn thành: <strong className="text-success">{tasks.filter(t => t.status === 'Đã xong').length}</strong></li>
                  <li>Đang thực hiện: <strong className="text-warning">{tasks.filter(t => t.status === 'Đang làm').length}</strong></li>
                </ul>
              </Card>
            </div>
          )}

          {activeMenu !== 'Công việc' && activeMenu !== 'Thống kê' && (
            <div>
              <h3 className="fw-bold mb-3" style={{ color: '#1e293b' }}>{activeMenu}</h3>
              <Card className="border-0 shadow-sm p-4 text-muted">
                Nội dung chức năng <strong>{activeMenu}</strong> đang được phát triển theo đúng đặc tả của nhóm.
              </Card>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function NavMenu({ icon, label, active, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`d-flex align-items-center px-3 py-2 mb-2 rounded-3 ${active ? 'text-white fw-bold' : 'text-secondary'}`}
      style={{ 
        backgroundColor: active ? '#f97316' : 'transparent',
        cursor: 'pointer',
        transition: '0.2s'
      }}
    >
      <span className="me-3 fs-6">{icon}</span>
      <span style={{ fontSize: '0.9rem' }}>{label}</span>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <Col md={3}>
      <Card className="border-0 shadow-sm p-3 rounded-3 bg-white">
        <small className="text-muted fw-bold mb-1" style={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>{title}</small>
        <h2 className="fw-bold m-0" style={{ color: color, fontSize: '1.8rem' }}>{value}</h2>
      </Card>
    </Col>
  );
}

export default App;