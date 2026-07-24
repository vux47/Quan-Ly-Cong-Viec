export class TaskEntity {
  id!: number;
  title!: string;
  description?: string;
  status!: string;
  assignedTo?: number | null;
  createdAt!: Date;
  updatedAt!: Date;
}