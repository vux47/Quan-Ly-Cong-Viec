export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: string;
  assignedTo?: number | null;
}
