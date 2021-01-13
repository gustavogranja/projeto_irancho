Criar o arquivo package
npm init

// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
npm install express

// Installar o módulo para reiniciar o servidor sempre que houver alteração no código fonte
npm install -D nodemon

// No linux é preciso colocar o seguinte comando para iniciar
npx nodemon "nome do arquivo"


// Installando o sequelize
npm install sequelize express
npm install -D sequelize-cli

// Criando os arquivos iniciais de configuração do sequelize, como config, migrations, models e seeders
npx sequelize init

// Criando a migration
npx sequelize migration:create --name=create-users

// Migrando tabela
npx sequelize db:migrate

// Installando o mysql2
npm install mysql2