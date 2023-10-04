import { Grid } from "@nextui-org/react"
import { SmallPokemon } from "../../interfaces"

import { FC } from "react"
import { PokemonCard } from "./PokemonCard"


interface Props {
    pokemons: SmallPokemon[]
}

export const PokemonList : FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon: SmallPokemon) => (
        <Grid key={pokemon.id} xs={6} sm={3} md={2} lg={2} xl={1}>
            <PokemonCard pokemon={pokemon} />
        </Grid>
        ))}                 
    </Grid.Container>
  )

}