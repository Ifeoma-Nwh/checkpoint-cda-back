import "reflect-metadata";
import dataSource from "./utils";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import CountryResolver from "./Resolvers/Country";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
async function bootstrap(): Promise<void> {
  // ... Building schema here
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    cors: true,
  });

  // The `listen` method launches a web server.
  server
    .listen(5000)
    .then(async ({ url }) => {
      console.log(`🚀  Server ready at ${url}`);

      try {
        await dataSource.initialize();
        console.log("I'm connected!");
      } catch (err) {
        console.log("Error Connecting");
        console.error(err);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

void bootstrap();
