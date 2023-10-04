import { Card, Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokémons Favoritos">
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favorites} />

      )}
    </Layout>
  );
};

export default FavoritesPage;
