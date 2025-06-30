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
├── models/ # Queries SQL
├── services/ # Regras de negócio
├── routes/ # Rotas da API
├── middlewares/ # Autenticação
├── utils/ # Validações
└── app.js # App Express
```

---

## 🧹 Padrões de Código

- ESLint + Prettier integrados
- Formatado automaticamente ao salvar

---

## 📜 Licença

Uso livre para fins educacionais e profissionais.
