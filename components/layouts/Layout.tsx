import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const origin = (typeof window == 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }: Props) => {

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Facundo Colavini" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta
          property="og:title"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
