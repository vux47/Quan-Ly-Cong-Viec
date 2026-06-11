export class TaskEntity {
  id!: number;
  title!: string;
  description?: string;
  completed!: boolean;
  userId?: number;
  createdAt!: Date;
  updatedAt!: Date;
}