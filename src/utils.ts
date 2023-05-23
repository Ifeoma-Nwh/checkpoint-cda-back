import { DataSource } from "typeorm";
import { Country } from "./Entities/Country";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./countries.db",
  synchronize: true,
  entities: [Country],
  logging: ["query", "error"],
});

export default dataSource;
