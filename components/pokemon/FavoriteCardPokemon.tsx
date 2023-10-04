import { Card } from "@nextui-org/react"
import { useRouter } from "next/router";
import { FC } from "react"

interface Props {
    id: number;
}

const FavoriteCardPokemon:FC<Props> = ({id}) => {
  const router  = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`);
  }

  return (
     <Card hoverable clickable css={{ padding: 10 }} onClick={onFavoriteClicked}>
    <Card.Image
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
      alt={`pokemon-${id}`}
      width={'100%'}
      height={200}
    />
      

</Card>
  )
}
export default FavoriteCardPokemon