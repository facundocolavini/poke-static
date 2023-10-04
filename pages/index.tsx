import { Card, Grid, Image, Row, Text } from "@nextui-org/react";
import type { GetStaticProps, NextPage } from "next";
import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonListResponse, SmallPokemon } from "../interfaces";
import Router from "next/router";
import { PokemonCard } from "../components/pokemon/PokemonCard";
import { PokemonList } from "../components/pokemon";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title="Listado de Pokémons">
      <Image src='/img/banner.png' width={200} height={150} />
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map(
    (pokemon: SmallPokemon, i) => {
      return {
        ...pokemon,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
          i + 1
        }.svg`,
      };
    }
  );

  return {
    props: {
      pokemons: pokemons,
    },
  };
};
