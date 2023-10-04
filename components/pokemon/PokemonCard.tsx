import { Card, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";
 
interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router  = useRouter();
  const onDetailPokemon = () => {
    router.push(`/name/${pokemon.name}`);
  }
  return (
    <Card
      hoverable
      shadow
      style={{ width: "100%", height: "100%" }}
       onClick={onDetailPokemon}
    >
      <Card.Body css={{ p: 1 }}>
        <Card.Header>{pokemon.name}</Card.Header>
        <Card.Image src={pokemon.img} width="100%" height={140} />
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
