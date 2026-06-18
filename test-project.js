// Test Project Module - JavaScript thuần

class Project {
  constructor() {
    this.id = null;
    this.name = '';
    this.description = '';
    this.ownerId = null;
    this.createdAt = null;
    this.updatedAt = null;
  }
}

class CreateProjectDto {
  constructor(name, ownerId, description = '') {
    this.name = name;
    this.ownerId = ownerId;
    this.description = description;
  }
}

class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundException';
  }
}

class ProjectService {
  constructor() {
    this.projects = [];
    this.idCounter = 1;
  }

  create(createProjectDto) {
    const newProject = new Project();
    newProject.id = this.idCounter++;
    newProject.name = createProjectDto.name;
    newProject.description = createProjectDto.description;
    newProject.ownerId = createProjectDto.ownerId;
    newProject.createdAt = new Date();
    newProject.updatedAt = new Date();
    
    this.projects.push(newProject);
    return newProject;
  }

  findAll() {
    return this.projects;
  }

  findOne(id) {
    const project = this.projects.find(p => p.id === id);
    if (!project) {
      throw new NotFoundException(`Không tìm thấy dự án với ID ${id}`);
    }
    return project;
  }

  update(id, updateProjectDto) {
    const project = this.findOne(id);
    Object.assign(project, updateProjectDto);
    project.updatedAt = new Date();
    return project;
  }

  remove(id) {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Không tìm thấy dự án với ID ${id}`);
    }
    this.projects.splice(index, 1);
    return { message: `Xóa thành công dự án có ID ${id}` };
  }
}

class ProjectController {
  constructor() {
    this.projectService = new ProjectService();
  }

  create(createProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  findAll() {
    return this.projectService.findAll();
  }

  findOne(id) {
    return this.projectService.findOne(id);
  }

  update(id, updateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  remove(id) {
    return this.projectService.remove(id);
  }
}

// ===== TEST =====
console.log('✅ Khởi tạo ProjectController...\n');
const controller = new ProjectController();

console.log('📝 Test 1: Tạo project mới');
const project1 = controller.create(new CreateProjectDto('Website Redesign', 1, 'Thiết kế lại website'));
console.log('Kết quả:', JSON.stringify(project1, null, 2));

console.log('\n📝 Test 2: Tạo project thứ 2');
const project2 = controller.create(new CreateProjectDto('Mobile App', 2));
console.log('Kết quả:', JSON.stringify(project2, null, 2));

console.log('\n📝 Test 3: Lấy tất cả projects');
const allProjects = controller.findAll();
console.log(`Tổng: ${allProjects.length} projects`);
allProjects.forEach(p => console.log(`  - ID: ${p.id}, Name: ${p.name}, Owner: ${p.ownerId}`));

console.log('\n📝 Test 4: Lấy project theo ID');
try {
  const found = controller.findOne(1);
  console.log('Found:', JSON.stringify(found, null, 2));
} catch (e) {
  console.log('❌ Error:', e.message);
}

console.log('\n📝 Test 5: Update project');
const updated = controller.update(1, { description: 'Thiết kế lại toàn bộ website' });
console.log('Updated:', JSON.stringify(updated, null, 2));

console.log('\n📝 Test 6: Xóa project');
const removed = controller.remove(2);
console.log('Result:', removed);
console.log('Remaining projects:', controller.findAll().length);

console.log('\n📝 Test 7: Lấy project không tồn tại');
try {
  controller.findOne(999);
} catch (e) {
  console.log('❌ Expected error:', e.message);
}

console.log('\n✅ Tất cả test hoàn thành!');
