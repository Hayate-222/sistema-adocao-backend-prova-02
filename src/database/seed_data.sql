USE pets_db;

-- Inserir 10 usuários
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

-- Inserir 15 pets
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

-- Inserir 5 adoções
INSERT INTO adoptions (user_id, pet_id, adoption_date) VALUES
(2, 3, '2024-05-10'),
(5, 6, '2024-06-01'),
(9, 10, '2024-06-15'),
(4, 12, '2024-06-20'),
(7, 7, '2024-07-01');



