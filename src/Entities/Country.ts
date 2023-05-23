import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { Length } from "class-validator";

@Entity()
@ObjectType()
export class Country {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  code!: string;

  @Column()
  @Field()
  name!: string;

  @Column()
  @Field()
  emoji!: string;
}

@InputType()
export class CountryInput {
  @Field()
  @Length(2, 4)
  code!: string;

  @Field()
  @Length(2, 50)
  name!: string;

  @Field()
  emoji!: string;
}
