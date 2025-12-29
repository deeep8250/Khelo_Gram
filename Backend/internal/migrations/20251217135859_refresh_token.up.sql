
CREATE TABLE refresh_tokens (
  id SERIAL PRIMARY KEY,
  userId INTEGER NOT NULL,
  token_hash TEXT NOT NULL,
  expire_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT now(),
  
  CONSTRAINT fk_refresh_tokens_user
  FOREIGN KEY (userId)
  REFERENCES users(id)
  ON DELETE CASCADE 
);