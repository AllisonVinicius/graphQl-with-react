import { ApolloServer } from "apollo-server";
import path from "path";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./src/resolvers/UserResolver";

async function main() {
  const schema = await buildSchema({
    //resolvers => parecido com controllers, rotas da aplicação basicamente
    //os resolvert fala para onde direcionar
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`$erver running on ${url}`);
}

main();
