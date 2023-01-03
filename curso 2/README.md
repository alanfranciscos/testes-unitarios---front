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

# Boas práticas

1. Usar describe oara descrever os testes.
2. usar o it para deixar o teste mais semântico.
3. O teste deve ser curto.
4. O teste deve ter poucas exceções (expect's), caso tenha muitos, dividir em testes.
5. Garantir que o teste passe em todas as vezes em que for testado, caso haja um erro, corrigi-lo imediatamente.

# Aplicação em produção -- Vercel

**Quando no projeto aberto na configuração de paginas da vercel..**

1. Abrir a sub aba Settings
2. Em geral, ir até "Build & Development Settings"
3. Em build command, procurar a opção buil command
4. Mudar o script padrão para: react-scripts test && react-scripts build
5. Salvar
