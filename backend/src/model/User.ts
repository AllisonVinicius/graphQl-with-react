import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field(_type => ID) //id unque
  id: string;

  @Field()
  name: string;
}
