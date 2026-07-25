import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

function Statistics({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'DONE').length;
  const inProgress = tasks.filter(t => t.status === 'IN_PROGRESS').length;
  const todo = tasks.filter(t => t.status === 'TODO').length;

  // Tính phần trăm hoàn thành
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <Container className="py-4">
      <h2 className="mb-4">📈 Thống kê & Báo cáo tiến độ</h2>

      <Row className="g-4">
        {/* Biểu đồ thanh tiến độ */}
        <Col md={12}>
          <Card className="p-4 shadow-sm">
            <h5 className="mb-3">Tỷ lệ hoàn thành tổng quan ({completionRate}%)</h5>
            <ProgressBar className="mb-3" style={{ height: '25px' }}>
              <ProgressBar striped variant="success" now={(completed / (total || 1)) * 100} label={`Hoàn thành (${completed})`} key={1} />
              <ProgressBar variant="warning" now={(inProgress / (total || 1)) * 100} label={`Đang làm (${inProgress})`} key={2} />
              <ProgressBar variant="secondary" now={(todo / (total || 1)) * 100} label={`Chưa làm (${todo})`} key={3} />
            </ProgressBar>
          </Card>
        </Col>

        {/* Chi tiết số lượng theo mức độ ưu tiên */}
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h5 className="mb-3">Phân bổ theo Mức độ ưu tiên</h5>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                🔥 Mức độ Cao (High)
                <span className="badge bg-danger rounded-pill">
                  {tasks.filter(t => t.priority === 'Cao').length}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                ⚡ Mức độ Trung bình (Medium)
                <span className="badge bg-warning text-dark rounded-pill">
                  {tasks.filter(t => t.priority === 'Trung bình').length}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                ☕ Mức độ Thấp (Low)
                <span className="badge bg-secondary rounded-pill">
                  {tasks.filter(t => t.priority === 'Thấp').length}
                </span>
              </li>
            </ul>
          </Card>
        </Col>

        {/* Tổng kết hệ thống */}
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <h5 className="mb-3">Tóm tắt hệ thống</h5>
            <p>Tổng số công việc đã ghi nhận trong cơ sở dữ liệu: <strong>{total}</strong></p>
            <p>Số lượng công việc đã hoàn thành đúng tiến độ: <strong className="text-success">{completed}</strong></p>
            <p>Số lượng công việc cần xử lý gấp: <strong className="text-danger">{total - completed}</strong></p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Statistics;