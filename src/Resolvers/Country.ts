import { Resolver, Query, Mutation, Arg, ID } from "type-graphql";
import dataSource from "../utils";
import { Country, CountryInput } from "../Entities/Country";
const repository = dataSource.getRepository(Country);

@Resolver()
export default class CountryResolver {
  @Mutation(() => Country)
  async createCountry(@Arg("data") data: CountryInput): Promise<Country> {
    return await repository.save(data);
  }

  @Query(() => Country, { nullable: true })
  async find(@Arg("code", () => ID) code: string): Promise<Country | null> {
    return await repository.findOne({
      where: { code },
    });
  }

  @Query(() => [Country], { nullable: true })
  async FindAllCountries(): Promise<Country[]> {
    return await dataSource.getRepository(Country).find();
  }
}
