# 🐶 Sistema de adoção

---

## 🚀 Funcionalidades

- Cadastro e gerenciamento de pets
- Listar todos os pets
- Cadastro e gerenciamento de usuario
- Autenticação com JWT
- Validação de dados

---

## 🛠 Tecnologias

- Node.js
- Express
- JWT
- MySQL
- ESLint
- Prettier
- REST Client (testes no VS Code)

---

## ⚙ Como executar

1. Clone o repositório:

```bash
git clone https://github.com/Hayate-222/sistema-adocao-backend-prova-02
cd sistema-adocao-backend-prova-02
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

- Rode os scripts:
- `create_database.sql`
- `create_tables.sql`
- `seed_data.sql` (opcional)

- Crie um arquivo `.env` com:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=pets_db
```

4. Inicie o servidor:

```bash
npm run dev
```

5. Teste os endpoints com o arquivo:

```
Adoption_sytem_test.rest
```

---

## 📁 Estrutura resumida

```
src/
├── config/ # Conexão com o banco
├── controllers/ # Lógica das requisições
├── Database/ # Estrutura do banco de dados e dados mockups
├── models/ # Queries SQL
├── services/ # Regras de negócio
├── routes/ # Rotas da API
├── middlewares/ # Autenticação
└── app.js # App Express
```

---

## 🧹 Padrões de Código

- ESLint + Prettier integrados
- Formatado automaticamente ao salvar

---

## ✅ Pontos da API

Usuários

    POST /users - Registrar um novo usuário (função padrão: adotante)

    POST /login - Autentica e obter um token JWT

    GET /users - Listar todos os usuários (somente administrador)

    GET /users/:id - Obter detalhes do usuário (próprio ou administrador)

    PUT /users/:id - Atualizar informações do usuário (próprio ou administrador)

    DELETE /users/:id - Excluir usuário (somente para administradores)

Animais de estimação

    GET /pets - Listar todos os animais de estimação

    GET /pets/available - Listar animais de estimação disponíveis para adoção

    POST /pets - Registrar um novo animal de estimação (somente para administradores)

    PUT /pets/:id - Atualizar informações do animal de estimação (somente para administradores)

    DELETE /pets/:id - Excluir um animal de estimação (somente se estiver disponível e não houver adoções) (somente para administradores)

Adoções

    GET /adoptions - Lista todas as adoções (somente para administradores)

    POST /adoptions - Fazer uma adoção (somente para adotantes)

---

## 🔐 Autenticação

Todos os pontos de API protegidos exigem um header de autorização com um token JWT válido

```
Authorization: Bearer <token>
```

---

## 📘 Regras de negócios

- Somente os administradores podem gerenciar usuários e animais de estimação de forma ampla.

- Os usuários se registram como adotantes por padrão.

- As senhas são armazenadas com hash.

- Os animais de estimação só podem ser adotados se o status deles estiver disponível.

- Os animais de estimação adotados não podem ser excluídos.

- Os usuários só podem adotar animais de estimação se sua função for adotante.

- Um usuário não pode adotar o mesmo animal de estimação mais de uma vez.

- Os tokens JWT incluem userId e função e expiram em 1 hora.

---

## 📜 Licença

Uso livre para fins educacionais e profissionais.
