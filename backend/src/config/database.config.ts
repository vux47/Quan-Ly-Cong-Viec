export const databaseConfig = {
  type: 'better-sqlite3' as const,
  database: process.env.DATABASE_PATH || '../database/database.sqlite',
  autoLoadEntities: true,
  synchronize: true,
};
