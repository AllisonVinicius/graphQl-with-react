import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../model/User";

//query: buscar dados
//mutation: criar,alterar, ou deletar dados
@Resolver()
export class UserResoler {
  private data: User[] = [];

  @Query(() => [User])
  async users() {
    return this.data;
  }

  @Mutation(() => User)
  async createUser(
    @Arg('name') name: string
  ){
    
    const user = { id: "1", name: };

    this.data.push(user);

    return this.users;
  }
}
