# Instalação de dependências

**prettier**
npm i -D prettier

**eslint**
npm i -D eslint eslint-config-prettier

**plug-ins do react**
npm install -D eslint-plugin-import
npm i -D eslint-plugin-jsx-a11y
npm install -D eslint-plugin-react
npm install -D eslint-plugin-react-hooks

_ou_

npm i -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks

# Sequência de ações

- **Instalar as dependências**
- **Configurar o arquivo prettier**
  1. Criar o arquivo .prettierrc
  2. inserir o comando no package json
     ("format": "prettier --write \"src/\*_/_{.js,.jsx}\"")
  3. rode o comando no terminal 'npm run format'
- **Configuração do arquivo eslint**
  1. Criar o arquivo .eslintrc
  2. inserir o comando no package json
     ("lint": "eslint \"src/\*_/_{.js,.jsx}\" --quiet")
