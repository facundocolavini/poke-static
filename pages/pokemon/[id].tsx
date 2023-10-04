import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { pokeApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

import { useState } from "react";
import { getPokemonInfo, localFavorites } from "../../utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorite, setIsInFavorite] = useState(
    localFavorites.isFavorite(pokemon.id)
  );
  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorite(!isInFavorite);
    if (isInFavorite) return
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 100,
      angle: -100,
      origin: {
        y: 0,
        x: 1
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card>
            <Card.Image
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                `/no-image.png`
              }
              alt={pokemon.name}
              width="100%"
              height={200}
            />
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorite}
                onClick={onToggleFavorite}
              >
                {isInFavorite ? "En favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text h2 size={30}>
                Sprites:
              </Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};
export default PokemonPage;

// Static site generation con argumentos
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((value, i) => `${i + 1}`); // Array de 151 elementos

  return {
    paths: pokemons151.map((id) => ({ params: { id } })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokeInfo = await getPokemonInfo(id);
  return {
    props: {
      pokemon:pokeInfo
    },
  };
};
