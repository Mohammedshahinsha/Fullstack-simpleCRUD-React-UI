import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  rollNumber: text("roll_number").notNull().unique(),
  email: text("email").notNull().unique(),
  mobile: text("mobile").notNull(),
});

export const insertStudentSchema = createInsertSchema(students).pick({
  name: true,
  rollNumber: true,
  email: true,
  mobile: true,
});

export const studentSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name is required"),
  rollNumber: z.string().min(1, "Roll Number is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Mobile number must be at least 10 characters"),
});

export type InsertStudent = z.infer<typeof insertStudentSchema>;
export type Student = typeof students.$inferSelect;
