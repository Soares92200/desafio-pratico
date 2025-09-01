# API para Lista de Contatos

API RESTful desenvolvida em **Node.js + Express** para gerenciar contatos uma lista de contatos simples (apenas "nome", "e-mail" e "telefone") com persistência em arquivo JSON.

---

## Como executar

1. **Clonar o repositório**
   ```bash
   git clone Soares92200/desafio-pratico
   cd desafio-pratico
   ```

2. **Instalar dependências**
   ```bash
   npm install express
   ```

3. **Iniciar a aplicação**
   ```bash
   node index.js
   ```

4. Acesse em: [http://localhost:3000](http://localhost:3000)

---

## Rotas disponíveis

### 1. Criar contato
`POST /contatos`

```bash
curl -X POST http://localhost:3000/contatos   -H "Content-Type: application/json"   -d '{"nome":"Fullano 1","email":"full@mano.com","telefone":"(12) 123456-7890"}'
```

Resposta:
```json
{ "id": 2, "nome": "Fullano 1", "email": "full@mano.com", "telefone": "(12) 123456-7890" }
```

**Validações aplicadas:**
- Nome precisa ter pelo menos 2 caracteres
- Email deve conter `@`
- Telefone deve ter no mínimo 11 caracteres

---

### 2. Listar contatos
`GET /contatos`

```bash
curl -X GET http://localhost:3000/contatos
```

Resposta:
```json
[
  { "id": 1, "nome": "Fullano 1", "email": "full@mano.com", "telefone": "(12) 12345-6789" }
]
```

---

### 3. Atualizar contato
`PUT /contatos/:id`

```bash
curl -X PUT http://localhost:3000/contatos/1   -H "Content-Type: application/json"   -d '{"telefone":"(12) 98765-4321"}'
```

Resposta:
```json
{ "id": 1, "nome": "Fullano 1", "email": "full@mano.com", "telefone": "(12) 98765-4321" }
```

---

### 4. Remover contato
`DELETE /contatos/:id`

```bash
curl -X DELETE http://localhost:3000/contatos/1
```

Resposta:
```
204 No Content
```

---

## Códigos de status utilizados

- `200 OK` → requisição bem-sucedida  
- `201 Created` → recurso criado com sucesso  
- `204 No Content` → recurso removido com sucesso  
- `400 Bad Request` → erro de validação nos dados enviados  
- `404 Not Found` → recurso não encontrado  

---

## Possíveis usos da nossa API

- **Pequenos negócios:** cadastro de clientes de forma simples e prática  
- **Eventos:** lista de participantes com dados básicos de contato  
- **Prototipagem:** base inicial para projetos maiores de CRM e agendas virtuais  
- **Aplicações educacionais:** exemplo de CRUD para aprendizado em programação web  
- **Pessoas curiosas:** entender como uma API funciona

---

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- Persistência em arquivo **JSON**

---

## Documentação

Toda a documentação da API está neste README (seção [Rotas disponíveis](#-rotas-disponíveis)).
  
## Universidade
Este projeto foi desenvolvido como atividade acadêmica na **Universidade Federal do Cariri (UFCA)**.

Atividade em grupo de:
- DIEGO GOUVEIA DE SOUSA - 2022011953
- BONFIM ESTEVAO SILVA - 2023010039
- EMANUEL SOARES DOS SANTOS - 2022009857

