const express = require('express');
const app = express();
app.use(express.json());

const fs = require('fs');

const filePath = './contatos.json';

// Carrega dados no arquivo
function carregarContatos() {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}


let contatos = carregarContatos();
let idAtual = contatos.length ? Math.max(...contatos.map(c => c.id))+ 1: 1;


// Salva os contatos em "contatos.json"
function salvarContatos(contatos) {
  fs.writeFileSync(filePath, JSON.stringify(contatos, null, 2));
}

// Validação de dados
function validarContato({ nome, email, telefone }) {
  if (!nome || nome.length < 2) return 'Deve ter pelo menos 2 caracteres';
  if (!email || !email.includes('@')) return 'Email inválido';
  if (!telefone || telefone.length < 11) return 'Telefone inválido';
  return null;
}



//let contatos = [];
//let idAtual = 1;


// Dados simulados iniciais
//let contatos = [
//  { id: 1, nome: "Fullano", email: "full@mano", telefone: "(12) 12345-6789" }
//];


// GET - Lista todos os contatos
app.get('/contatos', (req, res) => {
  res.json(contatos);
});


// POST - Adiciona um novo contato
app.post('/contatos', (req, res) => {

  const erro = validarContato(req.body);

  if (erro) return res.status(400).json({ erro });

  const { nome, email, telefone } = req.body;
  const novoContato = { id: idAtual++, nome, email, telefone };
  contatos.push(novoContato);

  salvarContatos(contatos);

  res.status(201).json(novoContato);
  
});


// PUT - Atualiza pelo id
app.put('/contatos/:id', (req, res) => {
  const { id } = req.params;
  
  const contato = contatos.find(c => c.id === parseInt(id));
  if (!contato) return res.status(404).json({ erro: 'Contato não encontrado' });

  const { nome, email, telefone } = req.body;

  const erro = validarContato({
    nome: nome || contato.nome,
    email: email || contato.email,
    telefone: telefone || contato.telefone
  });

  if (erro) return res.status(400).json({ erro });

  contato.nome = nome || contato.nome;
  contato.email = email || contato.email;
  contato.telefone = telefone || contato.telefone;

  salvarContatos(contatos);

  res.json(contato);
});


// DELETE - Remove pelo id
app.delete('/contatos/:id', (req, res) => {
  const { id } = req.params;
  const index = contatos.findIndex(c => c.id === parseInt(id));
  if (index === -1) return res.status(404).json({ erro: 'Contato não existe' });

  contatos.splice(index, 1);

  salvarContatos(contatos);

  res.status(204).send();
});

app.listen(3000, () => {
  console.log('Acesse http://localhost:3000');
});





