# FCAPS

Projeto de estudo (disciplina **PPA**) com uma **API REST básica** em Node.js + Express. O nome "FCAPS" remete ao modelo de gerenciamento de redes; aqui o foco é a estrutura em camadas (*routes → controllers → models*).

## Stack

- **Node.js** (>= 18, projeto usa módulos ES `"type": "module"`)
- **Express 5** (`express` `^5.2.1`)

## Estrutura do projeto

```
FCAPS/
├── server.js                      # Bootstrap: sobe o servidor na porta 3000
├── package.json
└── src/
    ├── app.js                     # Instância do Express + registro das rotas
    ├── routes/                    # Camada de rota (Router)
    │   ├── healthRoutes.js        #   GET /health
    │   └── accountRoutes.js       #   GET /accounts
    ├── controllers/               # Camada de controle (lógica leve)
    │   ├── healthController.js
    │   └── accountController.js
    └── models/                    # Camada de dados (dados em memória)
        ├── healthModel.js
        └── accountModel.js
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- [npm](https://www.npmjs.com/) (já vem com o Node)

Confirme a instalação:

```bash
node --version
npm --version
```

## Instalação (primeira vez)

Na raiz do projeto, instale as dependências:

```bash
npm install
```

Isso cria a pasta `node_modules/` a partir do `package-lock.json`.

> 💡 A pasta `node_modules/` não deve ser versionada. Recomenda-se criar um arquivo `.gitignore` na raiz com `node_modules/` antes do primeiro commit (ver seção *Dica*).

## Como executar

### 1. Iniciar o servidor

```bash
npm start
```

> ⚠️ Ainda não existe o script `start` no `package.json`. Por enquanto, rode direto com Node:

```bash
node server.js
```

Saída esperada:

```
Servidor rodando na porta 3000
```

### 2. Definir outra porta (opcional)

O servidor lê a variável de ambiente `PORT` (padrão **3000**):

```bash
PORT=4000 node server.js   # Linux / macOS
```

No PowerShell (Windows):

```powershell
$env:PORT=4000; node server.js
```

### 3. Testar os endpoints

Em outro terminal, use `curl` (ou navegador / [Postman](https://www.postman.com/) / [Insomnia](https://insomnia.rest/)):

| Método | URL                         | Descrição                          |
|--------|-----------------------------|------------------------------------|
| GET    | `http://localhost:3000/health`  | Verificação de saúde da API      |
| GET    | `http://localhost:3000/accounts`| Lista de contas em memória      |

Exemplos com `curl`:

```bash
curl http://localhost:3000/health
# {"status":"ok"}

curl http://localhost:3000/accounts
# [{"id":1,"name":"Roberto Silva","cpf":"925.735.920-49","status":"active"}, ...]
```

### 4. Parar o servidor

Pressione `Ctrl + C` no terminal onde o servidor está rodando.

## Rotas disponíveis

### `GET /health`

Retorna o estado da API:

```json
{ "status": "ok" }
```

### `GET /accounts`

Retorna uma lista fixa (em memória) de contas:

```json
[
  { "id": 1, "name": "Roberto Silva",  "cpf": "925.735.920-49", "status": "active" },
  { "id": 2, "name": "Bruno Ribeiro",  "cpf": "329.629.340-05", "status": "active" },
  { "id": 3, "name": "Jefferson Froes", "cpf": "128.590.570-99", "status": "inactive" }
]
```

> Os dados são fictícios e ficam fixos no código (`src/models/accountModel.js`) — ainda não há banco de dados.

Qualquer outra rota retorna **404**.

## Testes automatizados

**Não há testes automatizados configurados** — o script `test` atual do `package.json` apenas exibe uma mensagem de erro:

```bash
npm test
# Error: no test specified
```

O teste é feito manualmente via `curl` (ver seção *Como executar → Testar os endpoints*) ou explorando o servidor no navegador/Postman.

## Dica: git

Este projeto está em um repositório git (ramo `feature/aula-02-visao-inicial`) **sem commits iniciais**. Antes do primeiro commit, crie um `.gitignore` para não versionar dependências:

```bash
echo "node_modules/" > .gitignore
```

Depois, adicione e commite os arquivos de código:

```bash
git add .
git commit -m "visão inicial da API FCAPS"
```

## Licença

Uso educacional — sem licença específica declarada.
