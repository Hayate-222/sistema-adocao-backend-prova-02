USE pets_db;
INSERT INTO users (name, email, password, role) VALUES

('Alice Johnson', 'alice.johnson@example.com', 'password123', 'admin'),
('Bob Smith', 'bob.smith@example.com', 'passbob456', 'user'),
('Carol White', 'carol.white@example.com', 'carol789pass', 'user'),
('David Brown', 'david.brown@example.com', 'davidpass', 'user'),
('Eva Green', 'eva.green@example.com', 'evapass123', 'user'),
('Frank Miller', 'frank.miller@example.com', 'frankpass1', 'user'),
('Grace Lee', 'grace.lee@example.com', 'gracepass2', 'user'),
('Henry Adams', 'henry.adams@example.com', 'henrypass3', 'user'),
('Ivy Turner', 'ivy.turner@example.com', 'ivypass4', 'user'),
('Jackie Evans', 'jackie.evans@example.com', 'jackiepass5', 'user');


INSERT INTO users (name, email, phone, password, role) VALUES
('Gabriel Koharu', 'gabriel.k@example.com', '5511999999999', 'hashed_pass_1', 'admin'),
('Mariana Silva',  'mariana.s@example.com', '5511988888888', 'hashed_pass_2', 'adopter'),
('Carlos Souza', 'carlos.s@example.com', '5511977777777', 'hashed_pass_3', 'adopter'),
('Ana Paula', 'ana.p@example.com', '5511966666666', 'hashed_pass_4', 'adopter'),
('Rafael Lima', 'rafael.l@example.com', '5511955555555', 'hashed_pass_5', 'adopter'),
('João Mendes', 'joao.m@example.com', '5511944444444', 'hashed_pass_6', 'adopter'),
('Bianca Costa', 'bianca.c@example.com', '5511933333333', 'hashed_pass_7', 'adopter'),
('Lucas Pereira', 'lucas.p@example.com', '5511922222222', 'hashed_pass_8', 'adopter'),
('Fernanda Alves', 'fernanda.a@example.com', '5511911111111', 'hashed_pass_9', 'adopter'),
('Pedro Rocha', 'pedro.r@example.com', '5511900000000', 'hashed_pass_10', 'adopter');


INSERT INTO pets (name, age, species, size, status, description) VALUES

('Buddy', 3, 'Dog', 'Medium', 'Available', 'Friendly and energetic'),
('Whiskers', 2, 'Cat', 'Small', 'Available', 'Quiet and affectionate'),
('Max', 5, 'Dog', 'Large', 'Adopted', 'Loyal and protective'),
('Mittens', 1, 'Cat', 'Small', 'Available', 'Playful kitten'),
('Charlie', 4, 'Dog', 'Medium', 'Available', 'Good with kids'),
('Luna', 2, 'Dog', 'Small', 'Available', 'Loves to cuddle'),
('Oscar', 6, 'Cat', 'Medium', 'Available', 'Independent and calm'),
('Bella', 3, 'Dog', 'Large', 'Adopted', 'Great for active families'),
('Simba', 4, 'Cat', 'Small', 'Available', 'Curious and playful'),
('Rocky', 5, 'Dog', 'Medium', 'Available', 'Loyal and protective');

INSERT INTO pets (name, age, species, size, status, description) VALUES
('Thor', 3, 'Cachorro', 'Médio', 'Disponível', 'Golden Retriever amigável'),
('Luna', 2, 'Gato', 'Pequeno', 'Disponível', 'Siamês brincalhão'),
('Milo', 1, 'Coelho', 'Pequeno', 'Adotado', 'Coelho branco e fofinho'),
('Nina', 4, 'Cachorro', 'Grande', 'Disponível', 'Pastor Alemão protetor'),
('Simba', 3, 'Gato', 'Médio', 'Disponível', 'Gato listrado carinhoso'),
('Bella', 5, 'Cachorro', 'Pequeno', 'Adotado', 'Chihuahua energético'),
('Charlie', 6, 'Cachorro', 'Grande', 'Disponível', 'Labrador calmo'),
('Maggie', 2, 'Gato', 'Pequeno', 'Disponível', 'Gata preta e elegante'),
('Max', 4, 'Cachorro', 'Médio', 'Disponível', 'Bulldog inglês risonho'),
('Lola', 3, 'Cachorro', 'Pequeno', 'Adotado', 'Poodle branco e fofo'),
('Jack', 1, 'Pássaro', 'Pequeno', 'Disponível', 'Calopsita falante'),
('Daisy', 2, 'Cavalo', 'Grande', 'Disponível', 'Cavalo branco veloz'),
('Oliver', 5, 'Gato', 'Médio', 'Disponível', 'Gato cinza esperto'),
('Rocky', 3, 'Cachorro', 'Grande', 'Disponível', 'Boxer forte e amigável'),
('Ziggy', 1, 'Cachorro', 'Pequeno', 'Disponível', 'Dachshund curioso');



INSERT INTO adoptions (user_id, pet_id, adoption_date) VALUES

(2, 3, '2023-12-01'),
(3, 1, '2024-01-15'),
(4, 2, '2024-02-10'),
(5, 4, '2024-03-05'),
(6, 1, '2024-04-12'),
(7, 5, '2024-05-20');




