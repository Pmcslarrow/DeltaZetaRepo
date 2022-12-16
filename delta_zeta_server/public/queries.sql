    
CREATE TABLE userdata (
  "id" SERIAL PRIMARY KEY,
  "created" DATE,
  "name" TEXT,
  "age" INT,
  "position" TEXT,
  "email" TEXT,
  "password" TEXT
);

SELECT * FROM userdata;