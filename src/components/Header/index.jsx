import React from "react";

import Link from "next/link";

import { SiDtube } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { SiMyanimelist } from "react-icons/si";

import { Container, Title } from "./styles";

export function Header() {
  return (
    <Container>
      <div>
        <SiDtube size={30} color="#E53E3E" />
        <Title>ANITECA</Title>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="">
              <a>
                Animes
                <SiMyanimelist size={23} color="#E53E3E" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                Contato
                <MdOutlineAlternateEmail size={23} color="#3961A9" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                Discord
                <BsDiscord size={23} color="#6F85D5" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
