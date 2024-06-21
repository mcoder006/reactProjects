import { pgTable, integer, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const TopIdeas = pgTable('top-ideas', {
    id: serial('id').primaryKey(),
    content: varchar('content').notNull(),
    username: varchar('username').notNull(),
    vote: integer('vote').default(0),
    createdAt: timestamp('created_at').notNull().defaultNow(),
});