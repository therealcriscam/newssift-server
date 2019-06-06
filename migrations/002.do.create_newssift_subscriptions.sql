CREATE TABLE newssift_subscriptions (
  id SERIAL PRIMARY KEY,
  source_id TEXT NOT NULL,
  source_name TEXT NOT NULL,
  user_id INTEGER REFERENCES newssift_users(id) ON DELETE CASCADE NOT NULL
);