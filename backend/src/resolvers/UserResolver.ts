import { Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    return this.data;
  }

  @Mutation(() => User)
  async createUser() {
    const user = { id: "1", name: "Diego" };
    this.data.push(user);

    return user;
  }
}
