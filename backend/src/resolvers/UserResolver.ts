import { Query } from "type-graphql";

@Resolver
export class UserResolver {
  @Query()
  async hello() {
    return "Hello word";
  }
}
