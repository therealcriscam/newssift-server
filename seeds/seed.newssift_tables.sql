BEGIN;

TRUNCATE
  newssift_users,
  newssift_subscriptions
  RESTART IDENTITY CASCADE;

INSERT INTO newssift_users (username, name, password)
VALUES
  ('cristian', 'cristian camarero', '$2a$12$Nwrr0QhZ1ltQgu7Q0Y4P5eyeLWXPmnY84aVAtpzPwyZ/b5AEpTzwK'),
  ('taylor', 'taylor sellers', '$2a$12$BPmw1X6MWl323NLgBP1mlu8Lda1PpeVjh9VIPOJ5R3TkMaCKUWEji'),
  ('lucia', 'lucia doggerstein', '$2a$12$0m1mqLcO6YYY0X9SH22We.hu2Tm5GarjDptFL9NlrkTSpDCrxxOam');

INSERT INTO newssift_subscriptions (source_id, source_name, user_id)
VALUES
  ('espn', 'ESPN', 1),
  ('daily-mail', 'Daily Mail', 3),
  ('entertainment-weekly', 'Entertainment Weekly', 3),
  ('cnn', 'CNN', 2),
  ('buzzfeed', 'Buzzfeed', 3),
  ('the-new-york-times', 'The New York Times', 1),
  ('the-new-york-times', 'The New York Times', 2),
  ('time', 'Time', 2),
  ('usa-today', 'USA Today', 1),
  ('vice-news', 'Vice News', 3),
  ('wired', 'Wired', 1),
  ('the-verge', 'The Verge', 1),
  ('the-economist', 'The Economist', 1),
  ('techradar', 'TechRadar', 1),
  ('politico', 'Politico', 2);

COMMIT;