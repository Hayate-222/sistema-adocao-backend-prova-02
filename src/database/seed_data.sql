USE pets_db;

INSERT INTO users (name, nickname, email, password, role) VALUES
('Alice Johnson', 'alicej', 'alice.johnson@example.com', 'password123', 'admin'),
('Bob Smith', 'bobsmith', 'bob.smith@example.com', 'passbob456', 'user'),
('Carol White', 'carolw', 'carol.white@example.com', 'carol789pass', 'user'),
('David Brown', 'davidb', 'david.brown@example.com', 'davidpass', 'user'),
('Eva Green', 'evag', 'eva.green@example.com', 'evapass123', 'user'),
('Frank Miller', 'frankm', 'frank.miller@example.com', 'frankpass1', 'user'),
('Grace Lee', 'gracelee', 'grace.lee@example.com', 'gracepass2', 'user'),
('Henry Adams', 'henrya', 'henry.adams@example.com', 'henrypass3', 'user'),
('Ivy Turner', 'ivyturner', 'ivy.turner@example.com', 'ivypass4', 'user'),
('Jackie Evans', 'jackiee', 'jackie.evans@example.com', 'jackiepass5', 'user');

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

INSERT INTO adoptions (user_id, pet_id, adoption_date) VALUES
(2, 3, '2023-12-01'),
(3, 1, '2024-01-15'),
(4, 2, '2024-02-10'),
(5, 4, '2024-03-05'),
(6, 1, '2024-04-12'),
(7, 5, '2024-05-20');


