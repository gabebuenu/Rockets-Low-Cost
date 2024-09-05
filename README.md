Rockets Low Costs

Este projeto é um sistema para gerenciar e simular lançamentos de foguetes, com integração com a API da SpaceX e a capacidade de criar foguetes personalizados. O sistema foi construído utilizando React no front-end, Express como servidor backend, e MongoDB como banco de dados.

🛠 Tecnologias Utilizadas
Frontend: React
Backend: Node.js, Express
Banco de Dados: MongoDB
API: SpaceX API para informações de foguetes
Autenticação: Implementada no backend com JWT (JSON Web Token)
Dependências (Backend)
express: Framework de servidor web para Node.js.
mongoose: ODM para MongoDB.
jsonwebtoken: Para geração e verificação de tokens JWT.
cors: Habilita o uso de CORS para requisições entre o frontend e o backend.
body-parser: Para tratar requisições HTTP com corpo em JSON.
nodemon: Utilitário para reiniciar automaticamente o servidor ao fazer mudanças no código durante o desenvolvimento.
Dependências (Frontend)
react: Biblioteca JavaScript para construir interfaces de usuário.
react-router-dom: Para navegação entre as páginas.
axios: Para fazer requisições HTTP ao backend.
bootstrap: Biblioteca CSS para o layout do front-end.
jwt-decode: Para decodificar tokens JWT no frontend.
📦 Instalação
Pré-requisitos
Node.js (v12 ou superior)
MongoDB (local ou remoto)
npm ou yarn instalado
Backend
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/sistema-lancamento-foguetes.git
Navegue até a pasta do servidor:

bash
Copiar código
cd sistema-lancamento-foguetes/backend
Instale as dependências:

bash
Copiar código
npm install
Crie um arquivo .env na raiz da pasta backend com as seguintes variáveis:

bash
Copiar código
MONGO_URI=mongodb://localhost:27017/foguetesDB
JWT_SECRET=sua_chave_secreta_para_jwt
Inicie o servidor:

bash
Copiar código
npm run dev
O servidor estará rodando em http://localhost:5000.

Frontend
Navegue até a pasta do frontend:

bash
Copiar código
cd sistema-lancamento-foguetes/frontend
Instale as dependências:

bash
Copiar código
npm install
Inicie o frontend:

bash
Copiar código
npm start
O frontend estará rodando em http://localhost:3000.

📋 Funcionalidades
Autenticação de Usuários: Login e registro de usuários utilizando JWT para proteger as rotas.
Consulta de Foguetes SpaceX: Integração com a SpaceX API para buscar e exibir detalhes de foguetes e suas missões.
Criação de Foguetes Personalizados: Formulário para criar e lançar seus próprios foguetes, com informações personalizadas.
Simulação de Lançamento: Simulação de lançamentos com cálculo de custo e lucro.
Visualização de Lançamentos: Detalhamento dos foguetes lançados e seus respectivos status.
📂 Estrutura de Pastas
php
Copiar código
sistema-lancamento-foguetes/
│
├── backend/                # Código do servidor (Node.js/Express)
│   ├── controllers/        # Controladores que gerenciam as requisições
│   ├── models/             # Modelos do banco de dados (Mongoose)
│   ├── routes/             # Rotas da API
│   └── app.js              # Arquivo principal do servidor
│
├── frontend/               # Código do cliente (React)
│   ├── public/             # Arquivos públicos (index.html, etc.)
│   ├── src/                # Código fonte do React
│   │   ├── components/     # Componentes React reutilizáveis
│   │   ├── pages/          # Páginas principais do site
│   │   └── App.js          # Arquivo principal do React
│
└── README.md               # Documentação do projeto
🔑 Autenticação
Registro: O usuário pode se registrar informando nome, e-mail e senha.
Login: O login gera um token JWT, que é utilizado para autenticar as rotas protegidas.
Token JWT: Após o login, o token JWT é armazenado no localStorage e utilizado para acessar rotas privadas.
🚀 Como usar
Acesse a página principal e faça login ou registre-se.
Visualize foguetes da SpaceX ou crie seus próprios foguetes personalizados.
Simule o lançamento dos foguetes e calcule o valor total com base no custo e no lucro desejado.
Veja o status de foguetes já lançados e suas missões.
🛠️ Rotas da API (Backend)
Foguetes
GET /api/foguetes: Retorna todos os foguetes disponíveis.
POST /api/foguetes: Cria um novo foguete personalizado.
Lançamentos
POST /api/lancamento: Atualiza o foguete com informações de lançamento.
Usuários
POST /api/usuarios/registro: Registra um novo usuário.
POST /api/usuarios/login: Autentica o usuário e retorna um token JWT.
📝 Próximos Passos
Testes Unitários: Adicionar testes unitários com Jest para garantir a qualidade do código.
Melhorias de UI/UX: Ajustar a interface para melhor experiência do usuário.
Logs de Lançamentos: Implementar um histórico detalhado dos lançamentos com filtros.
🧑‍💻 Contribuidores
Gabriel Bueno da Silva
📝 Licença
Este projeto é licenciado sob a MIT License.

Essa documentação fornece uma visão geral do projeto e guia o desenvolvedor através das etapas de instalação, configuração e uso.



Prints
![Captura de tela 2024-09-05 192655](https://github.com/user-attachments/assets/d602dce2-9894-4a72-aa1d-bc2f0d970e60)
![Captura de tela 2024-09-05 192702](https://github.com/user-attachments/assets/34e013ff-cd6f-44a7-82d9-77f45d25247b)
![Captura de tela 2024-09-05 192714](https://github.com/user-attachments/assets/3efef321-ecef-4e35-b9b6-e58a1b4b7db9)
![Captura de tela 2024-09-05 192726](https://github.com/user-attachments/assets/3b12ff36-8261-4411-a425-307eb9c9fd9d)
![Captura de tela 2024-09-05 192734](https://github.com/user-attachments/assets/1e40acfb-5293-484a-9912-1e455f72d946)
![Captura de tela 2024-09-05 192813](https://github.com/user-attachments/assets/39cfd3c1-9fdc-4bde-a2ee-e04f3f4d193a)
![Captura de tela 2024-09-05 192822](https://github.com/user-attachments/assets/3ba172f1-242f-4bf6-9017-92cc02cdaa08)
![Captura de tela 2024-09-05 193037](https://github.com/user-attachments/assets/e15073aa-8fc0-41a4-ad77-b5f8f8e6a439)
![Captura de tela 2024-09-05 193050](https://github.com/user-attachments/assets/e9f8c714-e018-4676-a0fc-2beb1db33420)
![Captura de tela 2024-09-05 193100](https://github.com/user-attachments/assets/b2fa53df-0501-4e9d-8b94-7bdf0254646a)




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
