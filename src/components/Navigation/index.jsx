import Link from "next/link";
import { useSession } from "next-auth/react";

import { GiDrippingSword } from "react-icons/gi";
import { BiLibrary } from "react-icons/bi";

import { Container, Button, Heart } from "./styles";

export function Navigation() {
  const { data: session } = useSession();

  return (
    <Container>
      <ul>
        {!!session ? (
          <li>
            {10 > 0 ? <Heart size={14} /> : ""}
            <Button quantity={0}>Favoritos</Button>
          </li>
        ) : (
          <></>
        )}

        <li>
          <Link href="/anime">
            <a>
              por gênero
              <GiDrippingSword color="#E53E3E" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/allAnimes">
            <a>
              Todos
              <BiLibrary color="#E53E3E" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/genres">
            <a>
              Gêneros
              <BiLibrary color="#E53E3E" />
            </a>
          </Link>
        </li>
        <li>
          <a
            href="https://discord.gg/HchNM3v4"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
        </li>
      </ul>
    </Container>
  );
}
