import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./utils/Schema.tsx",
  dialect: 'postgresql',
  migrations: {
    prefix: 'supabase'
  },
  dbCredentials: { 
    url:'postgresql://adarsha_owner:GbmQ0dpwHB5K@ep-dawn-salad-a51golqo.us-east-2.aws.neon.tech/adarsha?sslmode=require',
  }
})