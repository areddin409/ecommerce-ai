import { type SchemaTypeDefinition } from "sanity"
import { customerType } from "./customerTypes"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customerType]
}
