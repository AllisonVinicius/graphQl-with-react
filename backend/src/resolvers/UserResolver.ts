import { Query } from "type-graphql";

@Resolver
export class UserResolver {
  @Query(() => String)
  async hello() {
    return "Hello word";
  }
}
