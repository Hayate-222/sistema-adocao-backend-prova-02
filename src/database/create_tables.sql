USE pets_db;

CREATE TABLE IF NOT EXISTS users (
id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    nickname VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(45) NOT NULL,
    UNIQUE (email),
    UNIQUE (id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS pets(
    id INT NOT NULL AUTO_INCREMENT,
    UNIQUE (id),
    name VARCHAR(45) NOT NULL,
    age INT NOT NULL,
    species VARCHAR(45) NOT NULL,
    size VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    description VARCHAR(45)
);

CREATE TABLE IF NOT EXISTS adoptions (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    pet_id INT NOT NULL,
    adoption_date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (pet_id) REFERENCES pets(id)
);
