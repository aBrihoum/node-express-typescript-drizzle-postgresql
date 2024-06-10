import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
dotenv.config();

const migrationClient = postgres(process.env.DATABASE_URL!, { max: 1 });

migrate(drizzle(migrationClient), {
  migrationsFolder: process.env.MIGRATIONS_FOLDER!,
}).then(() => {
  migrationClient.end();
});
