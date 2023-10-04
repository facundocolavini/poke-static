import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 50px",
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Link
        href="/"
        passHref
        style={{
          display: "flex",

          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          }
          alt="icono de la app"
          width={70}
          height={70}
        />

        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okémon
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
    
      <Link href="/favorites" passHref style={{ marginRight: '10px'}} >
      <Text color="white">Favoritos</Text>
      </Link>
    </div>
  );
};
