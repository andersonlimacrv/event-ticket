# Hero Ticket - Backend

## Tecnologias

- Typescript
- Node.js
- Express
- MongoDB (Atlas e mongoose)
- Jest
- Supertest

## Iniciando o projeto do backend

1. Inicialize o projeto:

```shell
yarn init -y
```

2. Inicialize o repositório git:

```shell
git init
```

3. Instale o Typescript como dependência de desenvolvimento:

```shell
yarn add -D typescript
```

4. Configure o TypeScript:

```shell
npx tsc --init
```

5. Edite o arquivo `tsconfig.json`.

6. Instale o pacote ts-node para execução de arquivos TypeScript:

```shell
yarn add -D ts-node
```

7. Instale o Jest e suas definições de tipos:

```shell
yarn add -D jest @types/jest
```

8. Instale o Supertest e suas definições de tipos:

```shell
yarn add -D supertest @types/supertest
```

9. Configure o Jest:

```shell
npx jest --init
```

10. Instale o pacote ts-jest:

```shell
yarn add -D ts-jest
```

11. Edite o arquivo `jest.config.ts`.

## Diagrama de Classes

![Diagrama](/diagrama-classe.png)

## Endpoints

- [x] Criar evento
- [ ] Buscar evento por localização
- [ ] Buscar evento por categoria
- [ ] Buscar evento por nome
- [ ] Buscar evento por id
- [ ] Verificar se usuário existe
- [ ] Inserir usuário no evento

## Links

- [RoadMap](https://herocodebr.notion.site/herocodebr/Semana-do-Her-i-RoadMap-Hero-Tickets-08ef3438d7e84ce899a13c348b653194)

- [Figma](https://www.figma.com/file/u8SIJScBeIMTUUa9JywATo/Hero-Week-02?type=design&node-id=0-1&mode=design&t=bBIdarCUpHEIGGyz-0)
