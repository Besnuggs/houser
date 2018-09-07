CREATE TABLE Houses (
  inventory_id SERIAL PRIMARY KEY,
  name varchar(30),
  address varchar(100),
  city varchar(100),
  state varchar(2),
  zip INTEGER,
  img TEXT,
  mortgage DECIMAL,
  rent DECIMAL
);