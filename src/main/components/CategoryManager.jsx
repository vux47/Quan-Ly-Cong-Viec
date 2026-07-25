import React, { useState } from 'react';
import { Container, Card, Form, Button, Table, Row, Col } from 'react-bootstrap';

function CategoryManager() {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Học tập', color: '#0d6efd' },
    { id: 2, name: 'Công việc', color: '#dc3545' },
    { id: 3, name: 'Cá nhân', color: '#198754' }
  ]);

  const [newCatName, setNewCatName] = useState('');
  const [newCatColor, setNewCatColor] = useState('#ffc107');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    const newCategory = {
      id: categories.length + 1,
      name: newCatName,
      color: newCatColor
    };
    setCategories([...categories, newCategory]);
    setNewCatName('');
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <Container className="py-4">
      <h2>Quản lý danh mục công việc</h2>
      
      {/* Form thêm danh mục */}
      <Card className="p-4 my-3 shadow-sm">
        <Form onSubmit={handleAddCategory}>
          <Row className="g-3 align-items-end">
            <Col md={6}>
              <Form.Label>Tên danh mục</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Nhập tên danh mục mới..." 
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                required
              />
            </Col>
            <Col md={3}>
              <Form.Label>Mã màu nhận diện</Form.Label>
              <Form.Control 
                type="color" 
                value={newCatColor}
                onChange={(e) => setNewCatColor(e.target.value)}
                className="form-control-color w-100"
              />
            </Col>
            <Col md={3}>
              <Button type="submit" variant="primary" className="w-100">Thêm danh mục</Button>
            </Col>
          </Row>
        </Form>
      </Card>

      {/* Bảng danh sách danh mục */}
      <Card className="p-3 shadow-sm">
        <Table hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên danh mục</th>
              <th>Màu hiển thị</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td className="fw-semibold">{cat.name}</td>
                <td>
                  <span 
                    style={{ 
                      backgroundColor: cat.color, 
                      width: '24px', 
                      height: '24px', 
                      display: 'inline-block', 
                      borderRadius: '50%' 
                    }}
                  ></span>
                </td>
                <td>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => handleDeleteCategory(cat.id)}
                  >
                    Xóa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default CategoryManager;