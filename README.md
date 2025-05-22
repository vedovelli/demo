# Bem-vindo ao React Router!

Um template moderno e pronto para produção para construção de aplicações React full-stack usando React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Funcionalidades

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Bundling e otimização de assets
- 🔄 Carregamento de dados e mutations
- 🔒 TypeScript por padrão
- 🎉 TailwindCSS para estilização
- 📖 [Documentação do React Router](https://reactrouter.com/)

## Começando

### Instalação

Instale as dependências:

```bash
npm install
```

### Desenvolvimento

Inicie o servidor de desenvolvimento com HMR:

```bash
npm run dev
```

Sua aplicação estará disponível em `http://localhost:5173`.

## Gerenciamento de Database com Prisma

Este projeto usa [Prisma](https://www.prisma.io/) como ORM para gerenciamento de database. Abaixo estão os comandos essenciais do Prisma que você precisará:

### Gerar Prisma Client

Após qualquer alteração no seu Prisma schema (`schema.prisma`), você precisa regenerar o Prisma Client:

```bash
npx prisma generate
```

Este comando:

- Lê seu arquivo de Prisma schema
- Gera tipos TypeScript e métodos personalizados para seu schema
- Cria a biblioteca Prisma Client em `node_modules/@prisma/client`

### Enviar Alterações do Schema para o Database

Para desenvolvimento e prototipagem, você pode enviar suas alterações de schema diretamente para o database:

```bash
npx prisma db push
```

Este comando:

- Sincroniza seu Prisma schema com o schema do database
- Cria ou atualiza tabelas do database baseadas nos seus models
- Não cria arquivos de migration (útil para prototipagem rápida)
- **Nota:** Use com cuidado, pois pode causar perda de dados em alguns cenários

### Workflow de Desenvolvimento

Para um workflow típico de desenvolvimento:

1. Modifique seu arquivo `schema.prisma`
2. Envie as alterações para o database: `npx prisma db push`
3. Gere o Prisma Client atualizado: `npx prisma generate`

### Migrations de Produção

Para ambientes de produção, considere usar Prisma Migrate ao invés de `db push`:

```bash
# Criar e aplicar uma nova migration
npx prisma migrate dev --name migration_name

# Deploy de migrations em produção
npx prisma migrate deploy
```

Para mais informações, visite a [documentação do Prisma](https://www.prisma.io/docs/).

## Build para Produção

Crie um build de produção:

```bash
npm run build
```

## Deploy

### Deploy com Docker

Para fazer build e executar usando Docker:

```bash
docker build -t my-app .

# Executar o container
docker run -p 3000:3000 my-app
```

A aplicação containerizada pode ser deployada em qualquer plataforma que suporte Docker, incluindo:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### Deploy Manual

Se você está familiarizado com deploy de aplicações Node, o servidor de aplicação integrado está pronto para produção.

Certifique-se de fazer deploy da saída do `npm run build`

```
├── package.json
├── package-lock.json (ou pnpm-lock.yaml, ou bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Estilização

Este template vem com [Tailwind CSS](https://tailwindcss.com/) já configurado para uma experiência inicial simples e padrão. Você pode usar qualquer framework CSS de sua preferência.

---

Construído com ❤️ usando React Router.
